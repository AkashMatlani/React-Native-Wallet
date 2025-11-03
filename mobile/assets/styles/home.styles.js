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
});
