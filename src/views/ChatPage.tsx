import React from 'react';
import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { nerds } from '../nerds/nerds';
import { StatusBar } from 'expo-status-bar';

export function ChatPage() {
	const messages = [
		{
			sender: nerds[0]?.name,
			avatar: nerds[0]?.imageUrl,
			message: 'Olá! Como você está?',
			read: true,
			time: '10:00',
		},
		{
			sender: 'Você',
			avatar: nerds[1]?.imageUrl,
			message: 'Estou bem, obrigado! E você?',
			read: false,
			time: '10:05',
		},
	];

	return (
		<View style={styles.container}>
			<StatusBar style='dark' />
			<View style={styles.header}>
				<TouchableOpacity style={styles.iconContainer}>
					<Ionicons name='arrow-back' size={16} color='#4B164C' />
				</TouchableOpacity>
				<View style={styles.headerUser}>
					<Image
						source={{ uri: messages[0]?.avatar }}
						style={styles.messageAvatar}
					/>
					<Text style={styles.title}>{messages[0]?.sender}</Text>
				</View>
			</View>

			<View style={styles.messagesContainer}>
				{messages.map((message, index) => (
					<View
						key={index}
						style={
							message.sender === 'Você'
								? styles.myMessageContainer
								: styles.messageContainer
						}
					>
						<Image
							source={{ uri: message.avatar }}
							style={styles.messageAvatar}
						/>
						<View
							style={
								message.sender === 'Você'
									? styles.myMessageBox
									: styles.messageBox
							}
						>
							<Text style={styles.messageText}>{message.message}</Text>
							<View style={styles.messageStatusContainer}>
								<Text style={styles.messageStatus}>
									{message.read ? (
										<Ionicons
											name='checkmark-done-outline'
											size={16}
											color='white'
										/>
									) : (
										<Ionicons
											name='checkmark-outline'
											size={16}
											color='white'
										/>
									)}
								</Text>
								<Text style={styles.messageTime}>{message.time}</Text>
							</View>
						</View>
					</View>
				))}
			</View>
			<View style={styles.inputContainer}>
				<TextInput style={styles.input} placeholder='Digite sua mensagem...' />
				<TouchableOpacity style={styles.sendButton}>
					<Ionicons name='send' size={24} color='#FFF' />
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFF',
	},
	header: {
		position: 'absolute',
		top: 40,
		left: 25,
		flexDirection: 'row',
		alignItems: 'center',
		width: '100%',
		borderBottomWidth: 1,
		borderColor: '#CCC',
	},
	headerUser: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
		paddingBottom: 10,
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
		marginRight: 100,
	},
	title: {
		fontFamily: 'roboto-bold',
		fontSize: 24,
		color: '#4B164C',
	},
	messagesContainer: {
		flex: 1,
		padding: 10,
		marginTop: 130,
	},
	messageContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
		marginBottom: 10,
	},
	myMessageContainer: {
		flexDirection: 'row-reverse',
		alignItems: 'center',
		justifyContent: 'flex-start',
		marginBottom: 10,
	},
	messageAvatar: {
		width: 50,
		height: 50,
		borderRadius: 25,
	},
	messageBox: {
		maxWidth: '70%',
		marginLeft: 10,
		padding: 10,
		backgroundColor: '#DD88CF',
		borderRadius: 10,
	},
	myMessageBox: {
		maxWidth: '70%',
		marginRight: 10,
		padding: 10,
		backgroundColor: '#4B164C',
		borderRadius: 10,
	},
	messageText: {
		fontSize: 14,
		color: '#FFF',
	},
	messageStatusContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
	messageStatus: {
		fontSize: 12,
		marginRight: 5,
		color: '#FFF',
	},
	messageTime: {
		fontSize: 12,
		color: '#FFF',
	},
	inputContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 10,
		borderTopWidth: 1,
		borderColor: '#CCC',
		backgroundColor: '#FFF',
	},
	input: {
		flex: 1,
		borderWidth: 1,
		borderColor: '#CCC',
		borderRadius: 5,
		marginRight: 10,
		padding: 5,
	},
	sendButton: {
		backgroundColor: '#4B164C',
		padding: 10,
		borderRadius: 5,
	},
});
