import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { useUser } from "@clerk/clerk-expo";
import { styles } from "../../assets/styles/create.styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";
import { API_URL } from "../../constants/api";

const CATEGORIES = [
  { id: "food", name: "Food & Drinks", icon: "fast-food" },
  { id: "shopping", name: "Shopping", icon: "cart" },
  { id: "transporation", name: "Transporation", icon: "car" },
  { id: "entertainment", name: "Entertainment", icon: "film" },
  { id: "bills", name: "Bills", icon: "receipt" },
  { id: "income", name: "Income", icon: "cash" },
  { id: "other", name: "Other", icon: "ellipsis-horizontal" },
];
const CreateScreen = () => {
  const router = useRouter();
  const { user } = useUser();

  const [selectdCategory, setSelectedCategory] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setIsExpense] = useState(false);

  const handleCreate = async () => {
    //validations
    if (!title.trim())
      return Alert.alert("Error", "Please enter a transaction title");
    if (!amount || isNaN(parseFloat(amount)) || parseFloat(amount) <= 0) {
      Alert.alert("Error", "Please enter a valid amount");
      return;
    }

    if (!selectdCategory)
      return Alert.alert("Error", "Please select a category");

    setIsLoading(true);
    try {
      //formatting amount (negative for expsenses, positive for income)
      const formattedAmount = isExpense
        ? -Math.abs(parseFloat(amount))
        : Math.abs(parseFloat(amount));

      const response = await fetch(`${API_URL}/transcations`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          userId: user.id,
          title,
          amount: formattedAmount,
          category: selectdCategory,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to create transaction");
      }

      Alert.alert("Success", "Transaction created Successfully");
      router.back();
    } catch (error) {
      Alert.alert("Error", error.message, "Failed to create transaction");
      consle.error("Error Creating transaction:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back"></Ionicons>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>New Transaction</Text>
        <Text style={styles.saveButton}>{isLoading?"Saving...":"Save"}</Text>
        {!isLoading && <Ionicons name="checkmark" size={18} color={COLORS.primary}/> }
      </View>
      <View style={styles.categoryGrid}>
        {CATEGORIES.map((category) => (
          <TouchableOpacity
            key={category.id}
            styles={[
              styles.categoryButton,
              selectdCategory === category.name && styles.categoryButtonActive,
            ]}
            onPress={() => setSelectedCategory(category.name)}
          >
            <Ionicons
              name={category.icon}
              size={20}
              color={
                selectdCategory === category.name ? COLORS.white : COLORS.text
              }
              style={styles.categoryIcon}
            ></Ionicons>
            <Text style={[styles.categoryButtonText]}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default CreateScreen;
