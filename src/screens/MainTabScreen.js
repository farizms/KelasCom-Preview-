import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import SearchScreen from './SearchSCreen';
import MyCoursesScreen from './MyCourcesScreen';
import ProfileScreen from './ProfileScreen';

const Tab = createBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
    initialRouteName='HomeScreen'
    headerMode='none'
    >
        <Tab.Screen
            name='HomeScreen'
            component={HomeScreen}
            options={{
                tabBarLabel:'Home',
                tabBarColor:'#c19b70',
                tabBarIcon:({ color }) => (
                    <Icon name="ios-home" color={color} size={28} />
                ),
            }}
        />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarColor: '#c19b70',
          tabBarIcon: ({ color }) => (
            <Icon name="search" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="MyCoursesScreen"
        component={MyCoursesScreen}
        options={{
          tabBarLabel: 'MyCourse',
          tabBarColor: '#c19b70',
          tabBarIcon: ({ color }) => (
            <Icon name="bulb" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#c19b70',
          tabBarIcon: ({ color }) => (
            <Icon name="person" color={color} size={28} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;