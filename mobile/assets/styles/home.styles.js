import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

export const homeStyle = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    padding: 20,
    paddingBottom: 0,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: 0,
    paddingVertical: 12,
  },
  headerLeft: {
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  headerLogo: {
    height: 75,
    width: 75,
  },
  welcomeContainer: {
    flex: 1,
  },
  welcomeText: {
    fontSize: 14,
    color: COLORS.textLight,
    marginBottom: 2,
  },
  userNameText: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.text,
  },

    headerRight: {
    alignItems: "center",
    flexDirection: "row",
    gap:12
  },
  addButton:{
   backgroundColor:COLORS.primary,
   paddingHorizontal:16,
   paddingVertical:10,
   borderRadius:24,
   flexDirection:"row",
   alignItems:"center",
   shadowColor:"#000",
   shadowOffset:{width:0,height:2},
   shadowOpacity:0.1,
   shadowRadius:4,
   elevation:3
  },

  addButtonText:{
    marginLeft:4,
    fontWeight:"600",
    color:COLORS.white
  },
  logoutButton:{
    padding:10,
    borderRadius:20,
    backgroundColor:COLORS.card,
    shadowColor:"#000",
    shadowOffset:{width:0,height:1},
    shadowOpacity:0.05,
    shadowRadius:2,
    elevation:1
  },
  balanceCard:{
    borderRadius:20,
    backgroundColor:COLORS.card,
    padding:20,
    marginBottom:20,
    shadowColor:COLORS.shadow,
    shadowOffset:{
      width:0,
      height:2
    },
    shadowOpacity:0.1,
    shadowRadius:3,
    elevation:3
  }
});
