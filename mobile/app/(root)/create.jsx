import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { useUser } from "@clerk/clerk-expo";
import { styles } from "../../assets/styles/create.styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";

const CATEGORIES = [
  { id: "food", name: "Food & Drinks", icon: "fast_food" },
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

  return (
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
            name={category.name}
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
  );
};

export default CreateScreen;
