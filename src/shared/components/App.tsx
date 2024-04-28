import * as SplashScreen from 'expo-splash-screen';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useLoadFonts } from '../fonts/useLoadFonts';
import { Navigator } from './Navigator';
import { Loading } from './Loading';

SplashScreen.preventAutoHideAsync();

export const App = () => {
	const { areFontsLoaded } = useLoadFonts();

	if (!areFontsLoaded) {
		return <Loading />;
	}

	SplashScreen.hideAsync();

	return (
		<SafeAreaProvider>
			<GestureHandlerRootView style={{ flex: 1 }}>
				<Navigator />
			</GestureHandlerRootView>
		</SafeAreaProvider>
	);
};
