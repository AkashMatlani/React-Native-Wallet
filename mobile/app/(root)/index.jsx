import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo'
import { Link } from 'expo-router'
import { Text, View } from 'react-native'
import { SignOutButton } from '../../components/SignOutButton'
import {useTransactions } from '../../hooks/useTransaction'
import { useEffect } from 'react'
import PageLoader, {pageLoader} from '../../components/PageLoader'

export default function Page() {
  const { user } = useUser()

  console.log("user:", user);
 // const userId = user?.id; // avoid crash

const userId = user?.id; 

    const { transactions, summary, isLoading, loadData, deleteTransaction } = 
    useTransactions(
   userId
  );


  useEffect(()=>{
    loadData();
  },[loadData]);

 // console.log("userid:------" ,user.id)
  console.log("transaction:",transactions)
  console.log("summary:",summary)

if(isLoading) return <PageLoader/>

  return (
    <View>
      <SignedIn>
        <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
        <Text>{summary.income}</Text>
        <SignOutButton />
      </SignedIn>
      <SignedOut>
        <Link href="/(auth)/sign-in">
          <Text>Sign in</Text>
        </Link>
        <Link href="/(auth)/sign-up">
          <Text>Sign up</Text>
        </Link>
      </SignedOut>
    </View>
  )
}