import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { nerds } from '../nerds/nerds';
import { useNavigation } from '@react-navigation/native';

export function MessagePage() {
	const navigation = useNavigation() as any;

	const handleCardPress = (match: any) => {
		navigation.navigate('ChatPage', { match });
	};

	return (
		<View style={styles.container}>
			<View>
				<Image
					style={styles.profilePic}
					source={require('../../assets/(O).png')}
				/>
				<View style={styles.header}>
					<TouchableOpacity style={styles.iconContainer}>
						<Ionicons name='arrow-back' size={16} color='#FFF' />
					</TouchableOpacity>
					<Text style={styles.title}>Messages</Text>
				</View>
				<View style={styles.recentMatchesContainer}>
					<Text style={styles.subTitle}>Recent Matches</Text>
					<ScrollView horizontal showsHorizontalScrollIndicator={false}>
						{nerds.map((match, index) => (
							<TouchableOpacity
								key={index}
								onPress={() => handleCardPress(match)}
							>
								<Image source={{ uri: match.imageUrl }} style={styles.avatar} />
							</TouchableOpacity>
						))}
					</ScrollView>
				</View>
			</View>

			<ScrollView style={styles.card}>
				{nerds.map((match, index) => (
					<TouchableOpacity key={index} onPress={() => handleCardPress(match)}>
						<View>
							<View style={styles.messageContainer}>
								<Image
									source={{ uri: match.imageUrl }}
									style={styles.messageAvatar}
								/>
								<View style={styles.messageContent}>
									<Text style={styles.messageName}>{match.name}</Text>
									<Text style={styles.messageText}>{match.message}</Text>
								</View>
								<View style={styles.messageInfo}>
									<View
										style={[
											styles.statusIndicator,
											{ backgroundColor: match.read ? '' : '#DD88CF' },
										]}
									/>
									<Text style={styles.messageTime}>
										{match.lastMessageTime}
									</Text>
								</View>
							</View>
							<View style={styles.separator} />
						</View>
					</TouchableOpacity>
				))}
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFF',
	},
	profilePic: {
		width: '100%',
		height: 290,
		backgroundColor: '#4B164C',
	},
	header: {
		position: 'absolute',
		top: 50,
		left: 25,
		flexDirection: 'row',
		alignItems: 'center',
		width: '100%',
	},
	iconContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'transparent',
		borderColor: '#FFF',
		borderWidth: 1,
		borderRadius: 24,
		width: 32,
		height: 32,
		marginRight: 100,
	},
	title: {
		fontFamily: 'roboto-bold',
		fontSize: 24,
		color: '#FFF',
	},
	subTitle: {
		fontFamily: 'roboto-medium',
		fontSize: 16,
		color: '#FFF',
		marginBottom: 15,
	},
	recentMatchesContainer: {
		position: 'absolute',
		top: 100,
		backgroundColor: 'transparent',
		padding: 10,
	},
	avatar: {
		width: 80,
		height: 92,
		marginRight: 10,
		borderRadius: 10,
	},
	card: {
		flex: 1,
		backgroundColor: '#FFF',
		paddingTop: 20,
		paddingLeft: 20,
		paddingRight: 20,
		borderTopLeftRadius: 40,
		borderTopRightRadius: 40,
		marginTop: -35,
	},
	messageContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 20,
	},
	messageAvatar: {
		width: 50,
		height: 50,
		borderRadius: 25,
	},
	messageContent: {
		flex: 1,
		marginLeft: 10,
	},
	messageName: {
		fontSize: 16,
		fontWeight: 'bold',
	},
	messageText: {
		fontSize: 14,
		color: '#555',
	},
	messageInfo: {
		flexDirection: 'column',
		alignItems: 'flex-end',
	},
	statusIndicator: {
		width: 10,
		height: 10,
		borderRadius: 5,
		marginBottom: 5,
	},
	messageTime: {
		fontSize: 12,
		color: '#777',
	},
	separator: {
		borderBottomWidth: 1,
		borderBottomColor: '#22172a10',
		marginBottom: 20,
	},
});
