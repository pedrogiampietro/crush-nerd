import React from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
	TouchableOpacity,
	TextInput,
	TouchableWithoutFeedback,
	Keyboard,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

export function VerifyEmailPage() {
	const [code, setCode] = React.useState(Array(5).fill(''));

	const navigation = useNavigation() as any;

	const handleBackPress = () => {
		navigation.navigate('NerdSwipePage');
	};

	const handleInputChange = (text, index) => {
		const newCode = [...code];
		newCode[index] = text;

		setCode(newCode);

		if (text && index < 4) {
			this['input' + (index + 1)].focus();
		}

		if (!text && index > 0) {
			this['input' + (index - 1)].focus();
		}
	};

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={styles.container}>
				<StatusBar style='auto' />

				<View style={styles.header}>
					<TouchableOpacity
						style={styles.iconContainer}
						onPress={() => handleBackPress()}
					>
						<Ionicons name='arrow-back' size={16} color='#4B164C' />
					</TouchableOpacity>
					<Text style={styles.title}>Verifique seu e-mail</Text>
				</View>

				<View style={styles.codeContainer}>
					{code.map((_, index) => (
						<TextInput
							key={index}
							ref={(ref) => (this['input' + index] = ref)}
							style={styles.codeInput}
							keyboardType='numeric'
							maxLength={1}
							onChangeText={(text) => handleInputChange(text, index)}
						/>
					))}
				</View>

				<TouchableOpacity style={styles.button} onPress={() => {}}>
					<Text style={styles.buttonText}>Verificar E-mail</Text>
				</TouchableOpacity>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	header: {
		position: 'absolute',
		top: 50,
		left: 25,
		flexDirection: 'row',
		alignItems: 'center',
		width: '100%',
	},
	codeContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '80%',
		marginTop: 20,
	},
	codeInput: {
		width: '18%',
		borderWidth: 1,
		borderColor: '#CCC',
		borderRadius: 5,
		padding: 10,
		textAlign: 'center',
	},
	iconContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'transparent',
		borderColor: '#4B164C',
		borderWidth: 1,
		borderRadius: 24,
		width: 32,
		height: 32,
		marginRight: 30,
	},
	containerButton: {
		backgroundColor: 'white',
		borderRadius: 50,
		padding: 5,
		marginRight: 10,
	},
	button: {
		width: '90%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#4B164C',
		padding: 15,
		borderRadius: 5,
		marginTop: 10,
	},
	buttonText: {
		color: 'white',
		fontSize: 16,
	},
	image: {
		width: 300,
		height: 300,
	},
	title: {
		fontSize: 24,
		color: '#4B164C',
		textAlign: 'center',
		fontFamily: 'roboto-bold',
	},
	inputContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 10,
		borderTopWidth: 1,
		borderColor: '#CCC',
		backgroundColor: '#FFF',
		borderRadius: 5,
		top: -20,
	},
	input: {
		flex: 1,
		borderWidth: 1,
		borderColor: '#CCC',
		borderRadius: 5,
		marginRight: 10,
		padding: 5,
	},
});
