import React, { useCallback, useRef } from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
	Dimensions,
} from 'react-native';
import { type SwipeableCardStackRef } from 'react-native-swipeable-card-stack';
import { type NerdAction } from '../nerds/NerdAction';
import { Ionicons } from '@expo/vector-icons';

import { NerdCardBottomView } from '../nerds/NerdCardBottomView';

export function ProfileMatchPage({ route }) {
	const { match } = route.params;
	const ref = useRef<SwipeableCardStackRef>(null);

	const onAction = useCallback((action: NerdAction) => {
		if (action === 'swipe-left') {
			ref.current?.swipe('left');
		}
		if (action === 'swipe-right') {
			ref.current?.swipe('right');
		}
		if (action === 'undo') {
			ref.current?.unswipe();
		}
	}, []);

	return (
		<ScrollView style={styles.container}>
			<Image style={styles.profilePic} source={{ uri: match.imageUrl }} />
			<View style={styles.overlay}>
				<View style={styles.header}>
					<TouchableOpacity>
						<Ionicons name='arrow-back' size={24} color='#FFF' />
					</TouchableOpacity>
					<Text style={styles.distance}>{match.distance}km away</Text>
				</View>
				<View style={styles.infoContainer}>
					<Text style={styles.nameAge}>
						{match.name}, {match.age}
					</Text>
					<Text style={styles.city}>{match.city}</Text>
					<View style={styles.matchBadge}>
						<Text style={styles.matchPercent}>{match.percentMatch}% Match</Text>
					</View>
				</View>
			</View>
			<View style={styles.card}>
				<Text style={styles.aboutTitle}>About</Text>
				<Text style={styles.aboutText}>
					A good listener. I love having a good talk to know each other’s side
					😍.
				</Text>
				<Text style={styles.interestTitle}>Interest</Text>
				<Text style={styles.interestText}>🍃 Nature</Text>
				<Text style={styles.interestText}>🏝 Travel</Text>
				<Text style={styles.interestText}>✍🏻 Writing</Text>
				<Text style={styles.interestText}>🙂 People</Text>
				<Text style={styles.interestText}>💪 Gym & Fitness</Text>
				<Text style={styles.interestTitle}>Interest</Text>
				<Text style={styles.interestText}>🍃 Nature</Text>
				<Text style={styles.interestText}>🏝 Travel</Text>
				<Text style={styles.interestText}>✍🏻 Writing</Text>
				<Text style={styles.interestText}>🙂 People</Text>
				<Text style={styles.interestText}>💪 Gym & Fitness</Text>
			</View>

			<NerdCardBottomView onAction={onAction} />
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFF',
	},
	profilePic: {
		width: '100%',
		height: 471,
	},
	overlay: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		height: 471,
		padding: 10,
		justifyContent: 'space-between',
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 50,
	},
	distance: {
		fontSize: 16,
		color: '#FFF',
	},
	infoContainer: {
		alignItems: 'center',
	},
	nameAge: {
		fontSize: 24,
		color: '#FFF',
	},
	city: {
		fontSize: 16,
		color: '#FFF',
	},
	matchBadge: {
		width: 48,
		height: 24,
		borderRadius: 12,
		backgroundColor: '#DD88CF',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 40,
		marginBottom: 40,
	},
	matchPercent: {
		fontSize: 16,
		color: '#000',
	},
	card: {
		flex: 1,
		backgroundColor: '#FFF',
		paddingTop: 55,
		paddingLeft: 20,
		borderTopLeftRadius: 40,
		borderTopRightRadius: 40,
		marginTop: -35,
		marginBottom: 150,
	},
	aboutTitle: {
		fontSize: 24,
		color: '#000',
	},
	aboutText: {
		fontSize: 16,
		color: '#000',
	},
	interestTitle: {
		fontSize: 24,
		color: '#000',
		marginTop: 10,
	},
	interestText: {
		fontSize: 16,
		color: '#000',
	},
});
