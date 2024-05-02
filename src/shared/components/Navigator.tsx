import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { HomePage } from '../../views/HomePage';
import { InterestsPage } from '../../views/InterestsPage';
import { MatchesPage } from '../../views/MatchesPage';
import { MessagePage } from '../../views/MessagesPage';
import { ProfileMatchPage } from '../../views/ProfileMatchPage';
import { NerdMatchPage, type MatchPageParams } from '../../nerds/NerdMatchPage';
import { ConnectionOptions } from './ConnectionOptionPage';
import { LoginPage } from '../../views/LoginPage';
import { ChatPage } from '../../views/ChatPage';

export type RootStackParamList = {
	Home: undefined;
	NerdSwipe: undefined;
	NerdMatch: MatchPageParams;
	Interests: undefined;
	ConnectionOption: undefined;
	LoginPage: undefined;
	MatchesPage: undefined;
	ProfileMatchPage: undefined;
	MessagePage: undefined;
	ChatPage: undefined;
};

const Tab = createBottomTabNavigator<RootStackParamList>();
const Stack = createStackNavigator();

export const Navigator = () => (
	<NavigationContainer>
		<Stack.Navigator
			initialRouteName='Home'
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name='TabNavigator' component={TabNavigator} />
			<Stack.Screen name='ProfileMatchPage' component={ProfileMatchPage} />
			<Stack.Screen name='NerdMatch' component={NerdMatchPage} />
			<Stack.Screen name='ConnectionOption' component={ConnectionOptions} />
			<Stack.Screen name='LoginPage' component={LoginPage} />
			<Stack.Screen name='NerdMatchPage' component={NerdMatchPage} />
			<Stack.Screen name='ChatPage' component={ChatPage} />
		</Stack.Navigator>
	</NavigationContainer>
);

export const TabNavigator = () => (
	<Tab.Navigator
		initialRouteName='Home'
		screenOptions={{
			headerShown: false,
			tabBarActiveTintColor: '#F63A6E',
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
			},
		}}
	>
		<Tab.Screen
			name='Home'
			component={HomePage}
			options={{
				tabBarIcon: ({ color, size, focused }) => (
					<Ionicons
						name={focused ? 'home' : 'home-outline'}
						color={color}
						size={size}
					/>
				),
				tabBarLabel: () => null,
			}}
		/>
		<Tab.Screen
			name='Interests'
			component={InterestsPage}
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
		<Tab.Screen
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
		<Tab.Screen
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
	</Tab.Navigator>
);
