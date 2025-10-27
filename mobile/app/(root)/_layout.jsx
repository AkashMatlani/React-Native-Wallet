import { useUser } from '@clerk/clerk-expo'
import { Redirect } from 'expo-router';
import { Stack } from 'expo-router/stack'

export default function Layout() {

    const isSignedUser = useUser();

    if(!isSignedUser) return <Redirect href={'/sign-in'}> </Redirect>;
    return <Stack screenOptions={{headerShown:false}}></Stack>
  return <Stack />
}