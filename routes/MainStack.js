import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "../screens/Home";
import Cities from "../screens/Cities";
import Update from "../screens/Update";
import Create from "../screens/Create";
import CitiesDetail from "../screens/CitiesDetail";

/*
Navigatorerna läggs i variabler så att vi enklare
kan lägga till Navigator och Screen.
*/
const Tab   = createBottomTabNavigator();
const Stack = createStackNavigator();

/*
En stack navigator bestående av 3 sidor 
*/
function citiesStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Cities" component={Cities} />
            <Stack.Screen options={({ route }) => ({ title: route.params.cityname })} name="CitiesDetail" component={CitiesDetail} />
            <Stack.Screen name="Update" component={Update} />
        </Stack.Navigator>
    )
}


function homeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}

function createStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Create" component={Create} />
        </Stack.Navigator>
    )
}


function MainStack() {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            /*
            Källa: https://reactnavigation.org/docs/tab-based-navigation/
            Kod för ikonernar på tabb navigationen på botten.
            Om route namnet är lika med Home så sätter vi ikonen med
            namnet home. Om vi är på Home tabben så sätter vi ikonen home om vi 
            är på annan tabb så sätter vi samma ikon, vi lägger det sedan i IconName variablen.
            */
            tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Cities') {
                iconName = focused ? 'earth' : 'earth';
            } else if (route.name === 'Create') {
                iconName = focused ? 'create-outline' : 'create-outline';
            } 


            return <Ionicons name={iconName} size={size} color={color} />;
            },

        })}
        /*
        Stil för ikonerna och tabbytan
        */
        tabBarOptions={{
            activeTintColor: '#5581c2',
            inactiveTintColor: '#fff',
            tabStyle: {
                backgroundColor: '#202021',
            },
          }}
        >
            {
                /*
                Tab navigation namn attributet som kommer att synas
                på tabben och den komponent som vi refererar till.
                */
            }
            <Tab.Screen name="Home"   component={homeStack}  />
            <Tab.Screen name="Cities" component={citiesStack} />
            <Tab.Screen name="Create" component={createStack} />
            {/* <Tab.Screen name="Update" component={Update} options={{tabBarButton: () => null,}} />
            <Tab.Screen name="CitiesDetail" component={CitiesDetail} options={{tabBarButton: () => null}} /> */}
        </Tab.Navigator>
    )
}



export default MainStack

