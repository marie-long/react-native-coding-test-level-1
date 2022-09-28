import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  CatalogDetailScreen,
  CatalogScreen,
  FormScreen,
  MainScreen,
} from "../screens";

const RootStack = createStackNavigator();

export const RootNavigationContainer = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="MainScreen"
        screenOptions={{
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "orange",
          },
          headerTitleStyle: {
            color: "black",
          },
          headerBackTitleVisible: false,
        }}
      >
        <RootStack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{ title: "Main Screen" }}
        />
        <RootStack.Screen
          name="FormScreen"
          component={FormScreen}
          options={{ title: "Form Submission" }}
        />
        <RootStack.Screen
          name="CatalogScreen"
          component={CatalogScreen}
          options={{ title: "Catalog" }}
        />
        <RootStack.Screen
          name="CatalogDetailScreen"
          component={CatalogDetailScreen}
          options={{ title: "Detail" }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
