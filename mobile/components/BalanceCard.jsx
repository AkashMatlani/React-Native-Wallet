import { View, Text } from "react-native";
import React from "react";
import { homeStyle } from "../assets/styles/home.styles";
import { COLORS } from "../constants/colors";
const BalanceCard = ({ summary }) => {
  return (
    <View style={homeStyle.balanceCard}>
      <Text style={homeStyle.balanceTitle}>Total Balance</Text>
      <Text style={homeStyle.balanceAmount}>
        ${parseFloat(summary.balance).toFixed(2)}
      </Text>
      <View style={homeStyle.balanceStats}>
        <View style={homeStyle.balanceStatItem}>
          <Text style={homeStyle.balnaceStatLabel}>Income</Text>
          <Text style={[homeStyle.balanceStatAmount,{color:COLORS.income}]}>
            ${parseFloat(summary.income).toFixed(2)}
          </Text>
        </View>
        <View style={[homeStyle.balanceStatItem, homeStyle.statDivider]}></View>
        <View style={homeStyle.balanceStatItem}>
          <Text style={[homeStyle.balnaceStatLabel,{color:COLORS.expense}]}>Expense</Text>
          <Text> ${parseFloat(summary.expense).toFixed(2)}</Text>
        </View>
      </View>
    </View>
  );
};

export default BalanceCard;
