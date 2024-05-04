import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { InterestsPage } from '../../views/InterestsPage';
import { MatchesPage } from '../../views/MatchesPage';
import { MessagePage } from '../../views/MessagesPage';
import { ProfileMatchPage } from '../../views/ProfileMatchPage';
import { NerdMatchPage, type MatchPageParams } from '../../nerds/NerdMatchPage';
import { ConnectionOptions } from './ConnectionOptionPage';
import { LoginPage } from '../../views/LoginPage';
import { ChatPage } from '../../views/ChatPage';
import { NerdSwipePage } from '../../nerds/NerdSwipePage';
import { ProfilePage } from '../../views/ProfilePage';

export type RootStackParamList = {
	Home: undefined;
	NerdSwipePage: undefined;
	NerdMatchPage: MatchPageParams;
	Interests: undefined;
	ConnectionOption: undefined;
	LoginPage: undefined;
	MatchesPage: undefined;
	ProfileMatchPage: undefined;
	MessagePage: undefined;
	ChatPage: undefined;
	ProfilePage: undefined;
};

const MainTab = createBottomTabNavigator<RootStackParamList>();
const MainStack = createStackNavigator();

const MainTabNavigator = () => (
	<MainTab.Navigator
		initialRouteName='MatchesPage'
		screenOptions={({ route }) => ({
			headerShown: false,
			tabBarActiveTintColor: '#DD88CF',
			tabBarStyle: {
				backgroundColor: '#FFFFFF',
				borderTopColor: 'transparent',
				borderRadius: 30,
				marginHorizontal: 10,
				marginBottom: 20,
				position: 'absolute',
				bottom: 0,
				left: 0,
				right: 0,
				height: 64,
				display: route.name === 'NerdSwipePage' ? 'none' : 'flex',
			},
		})}
	>
		<MainTab.Screen
			name='NerdSwipePage'
			component={NerdSwipePage}
			options={{
				tabBarIcon: ({ color, size, focused }) => (
					<Ionicons
						name={focused ? 'heart' : 'heart-outline'}
						color={color}
						size={size}
					/>
				),
				tabBarLabel: () => null,
			}}
		/>
		<MainTab.Screen
			name='LoginPage'
			component={LoginPage}
			options={{
				tabBarIcon: ({ color, size, focused }) => (
					<Ionicons
						name={focused ? 'notifications-outline' : 'notifications-outline'}
						color={color}
						size={size}
					/>
				),
				tabBarLabel: () => null,
			}}
		/>
		<MainTab.Screen
			name='MatchesPage'
			component={MatchesPage}
			options={{
				tabBarIcon: ({ color, size, focused }) => (
					<Ionicons
						name={focused ? 'add-circle' : 'add-circle-outline'}
						color={color}
						size={size}
					/>
				),
				tabBarLabel: () => null,
			}}
		/>
		<MainTab.Screen
			name='MessagePage'
			component={MessagePage}
			options={{
				tabBarIcon: ({ color, size, focused }) => (
					<Ionicons
						name={focused ? 'chatbubble' : 'chatbubble-outline'}
						color={color}
						size={size}
					/>
				),
				tabBarLabel: () => null,
			}}
		/>
		<MainTab.Screen
			name='ProfilePage'
			component={ProfilePage}
			options={{
				tabBarIcon: ({ color, size, focused }) => (
					<Ionicons
						name={focused ? 'people' : 'people-outline'}
						color={color}
						size={size}
					/>
				),
				tabBarLabel: () => null,
			}}
		/>
	</MainTab.Navigator>
);

export const Navigator = () => (
	<NavigationContainer>
		<MainStack.Navigator
			initialRouteName='MatchesPage'
			screenOptions={{
				headerShown: false,
			}}
		>
			<MainStack.Screen name='TabNavigator' component={MainTabNavigator} />
			<MainStack.Screen name='ProfileMatchPage' component={ProfileMatchPage} />
			<MainStack.Screen name='NerdMatchPage' component={NerdMatchPage} />
			<MainStack.Screen name='ConnectionOption' component={ConnectionOptions} />
			<MainStack.Screen name='LoginPage' component={LoginPage} />
			<MainStack.Screen name='ChatPage' component={ChatPage} />
		</MainStack.Navigator>
	</NavigationContainer>
);
