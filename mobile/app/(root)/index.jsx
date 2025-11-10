import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import {
  Alert,
  FlatList,
  RefreshControl,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SignOutButton } from "../../components/SignOutButton";
import { useTransactions } from "../../hooks/useTransaction";
import { useEffect, useState } from "react";
import PageLoader from "../../components/PageLoader";
import { homeStyle } from "../../assets/styles/home.styles";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import BalanceCard from "../../components/BalanceCard";
import { TransactionItem } from "../../components/TransactionItem";
import NoTransactionFound from "../../components/NoTransactionFound";

export default function Page() {
  const { user } = useUser();
  const router = useRouter();
  const userId = user?.id;

  const [refreshing,setRefreshing] =useState(false); 

  const { transactions, summary, isLoading, loadData, deleteTransaction } =
    useTransactions(userId);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const onRefresh =async () =>{
    setRefreshing(true);
    await loadData();
    setRefreshing(false);
  }

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

  if (isLoading && !refreshing) return <PageLoader />;

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
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      ></FlatList>
    </View>
  );
}
