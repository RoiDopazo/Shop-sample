import React from 'react';
import CartPage from '../modules/cart';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '../theme';
import SearchPage from '../modules/search/SearchPage';
import OrdersPage from '../modules/orders/OrdersPage';
import formatMessage from 'format-message';
import ROUTES from './routes';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import SearchItemDetails from '../modules/search/details/SearchItems';

const styles = StyleSheet.create({
  backButton: {
    paddingHorizontal: 8,
  },
});

const CartStack = createStackNavigator();

const CartStackNavigator = () => {
  return (
    <CartStack.Navigator
      screenOptions={() => ({
        headerLeft: (config) => {
          return (
            <TouchableOpacity onPress={config.onPress}>
              <Icon color={theme.palette.primary.main} style={styles.backButton} name={'arrow-left'} size={24} />
            </TouchableOpacity>
          );
        },
      })}>
      <Stack.Screen
        options={() => ({
          headerShown: false,
        })}
        name={ROUTES.Main}
        component={SearchPage}
      />
      <Stack.Screen name={ROUTES.SearchItems} component={SearchItemDetails} />
    </CartStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const tabs = [
  {
    name: formatMessage('Tienda'),
    icon: 'shopping',
    component: CartStackNavigator,
  },
  {
    name: formatMessage('Cesta'),
    icon: 'cart',
    component: CartPage,
  },
  {
    name: formatMessage('Mis pedidos'),
    icon: 'newspaper-variant',
    component: OrdersPage,
  },
];

const TabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => (
          <Icon
            name={`${tabs.find((e) => e.name === route.name).icon}${focused ? '' : '-outline'}`}
            size={24}
            color={theme.palette.primary.main}
          />
        ),
      })}
      tabBarOptions={{
        activeTintColor: theme.palette.primary.main,
        inactiveTintColor: theme.palette.primary.light,
      }}>
      {tabs.map((tab) => (
        <Tab.Screen key={tab.name} name={tab.name} component={tab.component} />
      ))}
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <TabScreen />
    </NavigationContainer>
  );
};

export default Router;
