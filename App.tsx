import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import AuthScreen from "./src/screens/AuthScreen";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
// import { persistCache } from 'apollo3-cache-persist'

export default function App() {
  const Tab = createBottomTabNavigator();

  const cache = new InMemoryCache();

  const client = new ApolloClient({
    uri: "https://api.graphql.guide/graphql",
    cache,
    defaultOptions: { watchQuery: { fetchPolicy: "cache-and-network" } },
  });

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Home" }}
          />

          <Tab.Screen name="Auth" component={AuthScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
