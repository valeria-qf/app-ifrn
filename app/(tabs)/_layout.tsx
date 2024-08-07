import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';


export default function TabLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'black',
            tabBarLabelStyle:{
                fontSize: 16,
                paddingBottom: 8,
            },
            tabBarStyle: {
                height: 70, 
            },
         }}>
            <Tabs.Screen
                name='index'
                options={{
                    headerShown: false,
                    title: 'Registrar Tarefas',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="calendar-check-outline"
                            size={28}
                            color={color}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name='tasklist'
                options={{
                    headerShown: false,
                    title: 'Lista de Tarefas',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="format-list-bulleted"
                            size={28}
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}
