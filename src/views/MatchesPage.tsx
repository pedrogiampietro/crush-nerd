import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { nerds } from '../nerds/nerds';

export function MatchesPage() {
	return (
		<View style={styles.container}>
			<StatusBar style='auto' />

			<View style={styles.header}>
				<TouchableOpacity>
					<Ionicons name='arrow-back' size={24} color='#22172A' />
				</TouchableOpacity>
				<Text style={styles.title}>Matches</Text>
				<TouchableOpacity>
					<Ionicons name='filter' size={24} color='#22172A' />
				</TouchableOpacity>
			</View>

			<View style={styles.avatars}>
				<View style={styles.avatarContainer}>
					<Image style={styles.avatar} source={{ uri: nerds[0]?.imageUrl }} />
					<View style={styles.iconContainer}>
						<Ionicons name='heart' size={48} color='rgba(255, 0, 0, 0.5)' />
					</View>
				</View>
				<View style={styles.avatarContainer}>
					<Image style={styles.avatar} source={{ uri: nerds[1]?.imageUrl }} />
					<View style={styles.iconContainer}>
						<Ionicons
							name='chatbubble'
							size={48}
							color='rgba(0, 0, 255, 0.5)'
						/>
					</View>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-start',
		paddingTop: 50,
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		padding: 10,
	},
	title: {
		fontSize: 24,
		color: '#22172A',
	},
	avatars: {
		flexDirection: 'row',
		marginTop: 20,
	},
	avatarContainer: {
		margin: 10,
		position: 'relative',
	},
	avatar: {
		width: 60,
		height: 60,
		borderRadius: 50,
		borderWidth: 2,
		borderColor: 'pink',
		marginBottom: 10,
		opacity: 0.5,
	},
	iconContainer: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: [{ translateX: -25 }, { translateY: -25 }],
	},
});
