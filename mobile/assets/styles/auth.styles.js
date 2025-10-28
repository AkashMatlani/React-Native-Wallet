import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

export const styles = StyleSheet.create({
  errorBox: {
    backgroundColor: "#FFE5E5",
    padding: 12,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.expense,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },

  verificationContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  verificationTitle:{
    fontSize:24,
    fontWeight:"bold",
    color: COLORS.text,
    marginBottom:20,
    textAlign:"center"
  },
  errorText:{
    color: COLORS.text,
    marginLeft:8,
    flex:1,
    fontSize:14
  },

  verificationInput:{
    backgroundColor:COLORS.white,
    borderRadius:12,
    padding:15,
    marginBottom:16,
    borderWidth:1,
    borderColor:COLORS.border,
    fontSize:16,
    color:COLORS.text,
    width: "100%",
    textAlign: "center",
    letterSpacing: 2
  },

  errorInput:{
    borderColor: COLORS.expense,
  },
  button:{
    backgroundColor:COLORS.primary,
    borderRadius:12,
    padding:16,
    alignItems: "center",
    marginTop:10,
    marginBottom:10
  },

  buttonText:{
    color:COLORS.white,
    fontSize:18,
    fontWeight: "600"
  }
});
