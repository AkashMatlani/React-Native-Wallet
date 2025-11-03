import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SignOutButton } from "../../components/SignOutButton";
import { useTransactions } from "../../hooks/useTransaction";
import { useEffect } from "react";
import PageLoader, { pageLoader } from "../../components/PageLoader";
import { homeStyle } from "../../assets/styles/home.styles";
import { Image } from "expo-image";
import { styles } from "../../assets/styles/auth.styles";

export default function Page() {
  const { user } = useUser();

  console.log("user:", user);
  // const userId = user?.id; // avoid crash

  const userId = user?.id;

  const { transactions, summary, isLoading, loadData, deleteTransaction } =
    useTransactions(userId);

  useEffect(() => {
    loadData();
  }, [loadData]);

  // console.log("userid:------" ,user.id)
  console.log("transaction:", transactions);
  console.log("summary:", summary);

  if (isLoading) return <PageLoader />;

  return (
    <View style={homeStyle.container}>
      <View style={homeStyle.content}>
        {/* Headrer */}
        <View style={homeStyle.header}>
          {/* Left */}
            <View style={homeStyle.headerLeft}>
            <Image source={require("../../assets/images/logo.png")}
            style={homeStyle.headerLogo}
            contentFit="contain">
            </Image>

            <View style={homeStyle.welcomeContainer}>
              <Text style={homeStyle.welcomeText}>Welcome,</Text>
                <Text style={homeStyle.userNameText}>{user.emailAddresses[0]?.emailAddress.split("@")[0]}
                </Text>
              </View>
            </View>
            
            </View>
        </View>
    </View>
  );
}
