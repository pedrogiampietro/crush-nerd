import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import {
	GoogleSignin,
	GoogleSigninButton,
	statusCodes,
} from '@react-native-google-signin/google-signin';

export function LoginPage() {
	const [error, setError] = React.useState<string>();
	const [userInfo, setUserInfo] = React.useState<any>();

	const configureGoogleSignIn = () => {
		GoogleSignin.configure({
			iosClientId:
				'391328285531-l7941nusgsb8eeb82lrnu6f9js218lan.apps.googleusercontent.com',
			webClientId:
				'391328285531-q27s3lk3go4p1h6i6d1pbkfcu4ac868n.apps.googleusercontent.com',
		});
	};

	React.useEffect(() => {
		configureGoogleSignIn();
	});

	const signIn = async () => {
		console.log('Pressed sign in');

		try {
			await GoogleSignin.hasPlayServices();
			const responseUser = await GoogleSignin.signIn();

			console.log('responseUser', responseUser);
			setUserInfo(responseUser);
			setError('');
		} catch (e: any) {
			console.log('e', e);
			setError(e);
		}
	};
	return (
		<View style={styles.container}>
			<StatusBar style='auto' />

			<Image
				style={styles.image}
				source={require('../../assets/people-ground.png')}
			/>

			<Text style={styles.title}>
				Vamos conhecer novas pessoas ao seu redor
			</Text>

			<TouchableOpacity style={styles.button} onPress={() => {}}>
				<View style={styles.iconContainer}>
					<Ionicons name='call' size={24} color='black' />
				</View>
				<Text style={styles.buttonText}>Entrar com número telefone</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.googleButton} onPress={signIn}>
				<Ionicons name='logo-google' size={24} color='#4B164C' />
				<Text style={styles.googleButtonText}>Login com Google</Text>
			</TouchableOpacity>

			<Text style={styles.signup}>
				Você ainda não tem uma conta?{' '}
				<Text style={styles.signupLink} onPress={() => {}}>
					Crie agora!
				</Text>
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	button: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#4B164C',
		padding: 10,
		borderRadius: 50,
		marginTop: 10,
	},
	iconContainer: {
		backgroundColor: 'white',
		borderRadius: 50,
		padding: 5,
		marginRight: 10,
	},
	buttonText: {
		color: 'white',
		fontSize: 16,
	},
	googleButton: {
		flexDirection: 'row',
		alignItems: 'center',
		borderColor: '#4B164C',
		borderWidth: 1,
		padding: 10,
		borderRadius: 50,
		marginTop: 10,
	},
	googleButtonText: {
		color: '#4B164C',
		fontSize: 16,
		marginLeft: 10,
	},
	image: {
		width: 300,
		height: 300,
	},
	title: {
		width: 300,
		fontSize: 24,
		color: '#22172A',
		textAlign: 'center',
		fontFamily: 'roboto-bold',
		marginVertical: 20,
	},
	signup: {
		marginTop: 20,
	},
	signupLink: {
		color: '#DD88CF',
		fontFamily: 'roboto-bold',
	},
});
