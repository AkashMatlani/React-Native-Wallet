import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";
import { homeStyle } from "../assets/styles/home.styles";

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
  const iconName = CATEGORY_ICONS[item.category] || "pricetag-ouline";

  return(

  <View style={homeStyle.transactionCard} key={item.id}>

    <TouchableOpacity style={homeStyle.transactionContent}
    ></TouchableOpacity>
  </View>
  );
};
