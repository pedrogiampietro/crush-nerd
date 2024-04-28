import React from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { nerds } from '../nerds/nerds';
import { MatchCard } from '../shared/components/MatchCard';
import { getBrandedText } from '../shared/fonts/getBrandedText';
import { useNavigation } from '@react-navigation/native';

export function MatchesPage() {
	const navigation = useNavigation() as any;

	const Title = getBrandedText({
		fontSize: 28,
		fontFamily: 'roboto-bold',
		color: 'white',
	});

	const handleCardPress = (match: any) => {
		navigation.navigate('ProfileMatchPage', { match });
	};

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
					<View style={styles.whiteBorder}>
						<Image style={styles.avatar} source={{ uri: nerds[0]?.imageUrl }} />
					</View>
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
					<View style={styles.whiteBorder}>
						<Image style={styles.avatar} source={{ uri: nerds[1]?.imageUrl }} />
					</View>
					<View style={styles.iconContainer}>
						<Ionicons name='chatbubble' size={36} color='#FFF' />
					</View>
					<Text style={styles.matchesTitle}>
						Connect <Text style={styles.matchesCount}>12</Text>
					</Text>
				</View>
			</View>

			<View style={styles.matchesContainer}>
				<Text style={styles.matchesText}>
					<Title style={{ color: '#4B164C' }}>Your Matches</Title>
					<Text style={{ color: '#DD88CF' }}>{'  '}47</Text>
				</Text>
				<ScrollView>
					<View style={styles.cards}>
						{nerds.map((match, index) => (
							<TouchableOpacity
								key={index}
								onPress={() => handleCardPress(match)}
							>
								<MatchCard match={match} />
							</TouchableOpacity>
						))}
					</View>
				</ScrollView>
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
	gradientBorder: {
		position: 'absolute',
		width: 70,
		height: 70,
		borderRadius: 35,
		justifyContent: 'center',
		alignItems: 'center',
	},
	whiteBorder: {
		width: 64,
		height: 64,
		borderRadius: 32,
		borderWidth: 2,
		borderColor: '#FFFFFF',
		justifyContent: 'center',
		alignItems: 'center',
	},
	avatar: {
		width: 60,
		height: 60,
		borderRadius: 30,
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
	absoluteFill: {
		position: 'absolute',
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		borderRadius: 32,
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
	matchesContainer: {
		width: '100%',
		padding: 10,
	},
	matchesText: {
		fontSize: 24,
		marginBottom: 10,
		marginLeft: 10,
	},
	cards: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		marginBottom: 230,
	},
});
