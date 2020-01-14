import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator
} from "react-navigation-tabs";
import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import AddDeckScreen from "../screens/AddDeckScreen";
import SettingsScreen from "../screens/SettingsScreen";
import DeckDetailsScreen from "../screens/DeckDetailsScreen";
import AddCardScreen from "../screens/AddCardScreen";
import QuizDetailsScreen from "../screens/QuizDetailsScreen";
import QuizResultScreen from "../screens/QuizResultScreen";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: "Deck",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-folder-open" : "md-folder-open"}
    />
  )
};

HomeStack.path = "";

const AddDeckStack = createStackNavigator(
  {
    Links: AddDeckScreen
  },
  config
);

AddDeckStack.navigationOptions = {
  tabBarLabel: "Add Deck",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-add-circle" : "md-add-circle"}
    />
  )
};

AddDeckStack.path = "";

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-options" : "md-options"}
    />
  )
};

SettingsStack.path = "";

//Nice to return a navigation type by a condition
const _TabNavigator =
  Platform.OS === "ios"
    ? createBottomTabNavigator
    : createMaterialTopTabNavigator;

const tabNavigator = _TabNavigator({
  HomeStack,
  AddDeckStack,
  SettingsStack
});

tabNavigator.path = "";
tabNavigator.navigationOptions = {
  header: null
};

const MainNavigator = createStackNavigator({
  Home: {
    screen: tabNavigator
  },
  DeckDetailsScreen: {
    screen: DeckDetailsScreen
  },
  AddCardScreen: {
    screen: AddCardScreen
  },
  QuizDetailsScreen: {
    screen: QuizDetailsScreen
  },
  QuizResultScreen: {
    screen: QuizResultScreen
  }
});

export default MainNavigator;
