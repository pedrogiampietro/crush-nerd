import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
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
					<View style={styles.gradientBorder}>
						<LinearGradient
							style={styles.absoluteFill}
							colors={['#FF00FF', '#800080', '#FFFFFF']}
							start={{ x: 0, y: 0 }}
							end={{ x: 1, y: 1 }}
						/>
					</View>
					<Image style={styles.avatar} source={{ uri: nerds[0]?.imageUrl }} />
					<View style={styles.iconContainer}>
						<Ionicons name='heart' size={36} color='#FFF' />
					</View>
					<Text style={styles.matchesTitle}>
						Likes <Text style={styles.matchesCount}>32</Text>
					</Text>
				</View>
				<View style={styles.avatarContainer}>
					<View style={styles.gradientBorder}>
						<LinearGradient
							style={styles.absoluteFill}
							colors={['#FF00FF', '#800080', '#FFFFFF']}
							start={{ x: 0, y: 0 }}
							end={{ x: 1, y: 1 }}
						/>
					</View>
					<Image style={styles.avatar} source={{ uri: nerds[1]?.imageUrl }} />
					<View style={styles.iconContainer}>
						<Ionicons name='chatbubble' size={36} color='#FFF' />
					</View>
					<Text style={styles.matchesTitle}>
						Connect <Text style={styles.matchesCount}>12</Text>
					</Text>
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
		alignItems: 'center',
	},
	gradientBorder: {
		position: 'absolute',
		width: 64,
		height: 64,
		borderRadius: 32,
		justifyContent: 'center',
		alignItems: 'center',
	},
	absoluteFill: {
		position: 'absolute',
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		borderRadius: 32,
	},
	avatar: {
		width: 60,
		height: 60,
		borderRadius: 30,
		marginBottom: 10,
		opacity: 0.5,
	},
	iconContainer: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: [{ translateX: -15 }, { translateY: -32 }],
	},
	matchesTitle: {
		color: '#000000',
		fontSize: 14,
		marginTop: 5,
	},
	matchesCount: {
		color: '#DD88CF',
	},
});
