import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { homeStyle } from "../assets/styles/home.styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants/colors";

const NoTransactionFound = () => {
  const router = useRouter();
  return (
    <View style={homeStyle.emptyState}>
      <Ionicons
        name="reader-outline"
        size={60}
        color={COLORS.textLight}
        style={homeStyle.emptyStateIcon}
      ></Ionicons>
      <Text style={homeStyle.emptyStateTitle}>No Transcation Yet</Text>
      <Text style={homeStyle.emptyStateText}>
        Start tracking finances by adding your first transcation
      </Text>

      <TouchableOpacity style={homeStyle.emptyStateButton} onPress={
        ()=> router.push("/create")}>
        <Ionicons name="add-circle" size={18} color={COLORS.white}> </Ionicons>
        <Text style={homeStyle.emptyStateButtonText}>Add Transaction</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NoTransactionFound;
