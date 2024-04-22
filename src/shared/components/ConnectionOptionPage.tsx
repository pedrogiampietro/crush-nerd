import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const ConnectionOptions = () => {
	const [value, setValue] = useState('');
	const navigation = useNavigation();

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Como você deseja se conectar?</Text>
			<View style={styles.option}>
				<RadioButton
					value='sameInterests'
					status={value === 'sameInterests' ? 'checked' : 'unchecked'}
					onPress={() => setValue('sameInterests')}
				/>
				<Text style={styles.optionText}>
					Você deseja se conectar com pessoas que têm os mesmos interesses que
					você?
				</Text>
			</View>
			<View style={styles.option}>
				<RadioButton
					value='differentInterests'
					status={value === 'differentInterests' ? 'checked' : 'unchecked'}
					onPress={() => setValue('differentInterests')}
				/>
				<Text style={styles.optionText}>
					Você deseja se conectar com outras pessoas, que têm interesses em
					outros jogos e animes diferentes que você?
				</Text>
			</View>
			{value && (
				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate('Home')}
				>
					<Text style={styles.buttonText}>Começar</Text>
				</TouchableOpacity>
			)}
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		padding: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 20,
		textAlign: 'center',
	},
	option: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 10,
		marginHorizontal: 20,
	},
	optionText: {
		flexShrink: 1,
	},
	button: {
		marginTop: 20,
		backgroundColor: 'black',
		borderColor: 'purple',
		borderWidth: 1,
		padding: 10,
		alignItems: 'center',
	},
	buttonText: {
		color: 'white',
		fontWeight: 'bold',
		fontFamily: 'Roboto',
		fontSize: 16,
	},
});
