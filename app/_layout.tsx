import { Stack } from 'expo-router/stack'

export function Layout() {
    return (
        <Stack>
            <Stack.Screen name='index' options={{headerShown:false}}/>
            <Stack.Screen name='(tabs)' options={{headerShown:false}}/>
        </Stack>
    )
}