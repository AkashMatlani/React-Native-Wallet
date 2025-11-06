import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { homeStyle } from "../assets/styles/home.styles";
import { COLORS } from "../constants/colors";
import { formatDate } from "../lib/utils";

const CATEGORY_ICONS = {
  "Food & Drinks": "fast-food",
  shopping: "cart",
  Transportation: "car",
  Entertainment: "film",
  Bills: "receipt",
  Income: "cash",
  Other: "ellipsis-horizontal",
};

export const TransactionItem = ({ item, onDelete }) => {
  const isIncome = parseFloat(item.amount) > 0;
  const iconName = CATEGORY_ICONS[item.category] || "pricetag-outline";

  return (
    <View style={homeStyle.transactionCard} key={item.id}>
      <TouchableOpacity style={homeStyle.transactionContent}>
        <View style={homeStyle.categoryIconContainer}>
          <Ionicons
            name={iconName}
            size={22}
            color={isIncome ? COLORS.income : COLORS.expense}
          ></Ionicons>
        </View>
        <View style={homeStyle.transactionLeft}>
          <Text style={homeStyle.transactionTitle}>{item.title}</Text>
          <Text style={homeStyle.transactionTitle}>{item.category}</Text>
        </View>
        <View style={homeStyle.transactionRight}>
          <Text style={[homeStyle.transactionAmount,{color:isIncome?COLORS.income:COLORS.expense}]}>
            {isIncome ? "+" : "-"} ${Math.abs(parseFloat(item.amount)).toFixed(2)}</Text>
          <Text style={homeStyle.transactionTitle}>{formatDate(item.created_at)}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
