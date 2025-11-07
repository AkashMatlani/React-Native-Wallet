import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import { Alert, FlatList, Text, TouchableOpacity, View } from "react-native";
import { SignOutButton } from "../../components/SignOutButton";
import { useTransactions } from "../../hooks/useTransaction";
import { useEffect } from "react";
import PageLoader, { pageLoader } from "../../components/PageLoader";
import { homeStyle } from "../../assets/styles/home.styles";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import BalanceCard from "../../components/BalanceCard";
import { TransactionItem } from "../../components/TransactionItem";
import NoTransactionFound from "../../components/NoTransactionFound";

export default function Page() {
  const { user } = useUser();

  const router = useRouter();
  console.log("user:", user);
  // const userId = user?.id; // avoid crash

  const userId = user?.id;

  const { transactions, summary, isLoading, loadData, deleteTransaction } =
    useTransactions(userId);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleDelete = (id) => {
    Alert.alert(
      "Delete Transaction",
      "Are you sure you want to delete this trasnactions?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },

        {
          text: "Delete",
          style: "destructive",
          onPress: () => deleteTransaction(id),
        },
      ]
    );
  };

  if (isLoading) return <PageLoader />;

  return (
    <View style={homeStyle.container}>
      <View style={homeStyle.content}>
        {/* Headrer */}
        <View style={homeStyle.header}>
          {/* Left */}
          <View style={homeStyle.headerLeft}>
            <Image
              source={require("../../assets/images/logo.png")}
              style={homeStyle.headerLogo}
              contentFit="contain"
            ></Image>

            <View style={homeStyle.welcomeContainer}>
              <Text style={homeStyle.welcomeText}>Welcome,</Text>
              <Text style={homeStyle.userNameText}>
                {user?.emailAddresses[0]?.emailAddress.split("@")[0]}
              </Text>
            </View>
          </View>

          {/* Right */}
          <View style={homeStyle.headerRight}>
            <TouchableOpacity
              style={homeStyle.addButton}
              onPress={() => router.push("/create")}
            >
              <Ionicons name="add" size={20} color="#FFF"></Ionicons>
              <Text style={homeStyle.addButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <SignOutButton />
        </View>

        {/* Balance Card */}

        <BalanceCard summary={summary} />
        <View style={homeStyle.transactionHeaderContainer}>
          <Text style={homeStyle.sectionTitle}>Recent Transaction</Text>
        </View>
      </View>

      <FlatList
        style={homeStyle.transactionsList}
        contentContainerStyle={homeStyle.transactionsListContent}
        data={transactions}
        renderItem={({ item }) => (
          <TransactionItem item={item} onDelete={handleDelete} />
        )}
        ListEmptyComponent={<NoTransactionFound />}
      ></FlatList>
    </View>
  );
}
