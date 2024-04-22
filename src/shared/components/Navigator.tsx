import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NerdMatchPage, type MatchPageParams } from '../../nerds/NerdMatchPage';
import { NerdSwipePage } from '../../nerds/NerdSwipePage';
import { HomePage } from './HomePage';
import { InterestsPage } from './InterestsPage';
import { ConnectionOptions } from './ConnectionOptionPage';

export type RootStackParamList = {
	Home: undefined;
	NerdSwipe: undefined;
	NerdMatch: MatchPageParams;
	Interests: undefined;
	ConnectionOption: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const Navigator = () => (
	<NavigationContainer>
		<RootStack.Navigator
			initialRouteName='Home'
			screenOptions={{
				headerShown: false,
			}}
		>
			<RootStack.Screen name='Home' component={HomePage} />
			<RootStack.Screen name='NerdSwipe' component={NerdSwipePage} />
			<RootStack.Screen
				name='NerdMatch'
				component={NerdMatchPage}
				options={{ presentation: 'fullScreenModal' }}
			/>
			<RootStack.Screen name='Interests' component={InterestsPage} />
			<RootStack.Screen name='ConnectionOption' component={ConnectionOptions} />
		</RootStack.Navigator>
	</NavigationContainer>
);
