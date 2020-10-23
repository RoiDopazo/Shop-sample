import React from 'react';
import CartPage from '../modules/cart';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Badge } from 'react-native-elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '../theme';
import SearchPage from '../modules/search/SearchPage';
import OrdersPage from '../modules/orders/OrdersPage';
import formatMessage from 'format-message';
import ROUTES from './routes';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StyleSheet, View } from 'react-native';
import SearchItemDetails from '../modules/search/details/SearchItems';
import { useStore } from 'outstated';
import CartStore from '../state/CartStore';

const styles = StyleSheet.create({
  backButton: {
    paddingHorizontal: 8,
  },
  tabBarIconContainer: {
    flexDirection: 'row',
  },
  badge: {
    position: 'absolute',
    left: -4,
    top: -4,
    backgroundColor: theme.palette.primary.main,
    color: 'red',
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
    id: 'shop',
    name: formatMessage('Tienda'),
    icon: 'shopping',
    component: CartStackNavigator,
  },
  {
    id: 'cart',
    name: formatMessage('Cesta'),
    icon: 'cart',
    component: CartPage,
  },
  {
    id: 'orders',
    name: formatMessage('Mis pedidos'),
    icon: 'newspaper-variant',
    component: OrdersPage,
  },
];

const TabBarIcon = ({ route, focused }) => {
  const {
    CartState: { items },
  } = useStore(CartStore);

  const showBadge = items && items.length > 0 && tabs.find((e) => e.name === route.name).id === 'cart';

  const numItems = items.reduce((acc, item) => {
    acc = acc + item.count;
    return acc;
  }, 0);

  return (
    <View style={styles.tabBarIconContainer}>
      <Icon
        name={`${tabs.find((e) => e.name === route.name).icon}${focused ? '' : '-outline'}`}
        size={24}
        color={theme.palette.primary.main}
      />
      {showBadge && <Badge value={numItems} badgeStyle={styles.badge} />}
    </View>
  );
};

const TabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => <TabBarIcon route={route} focused={focused} />,
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
