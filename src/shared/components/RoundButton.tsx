import { css } from '@emotion/native';
import { Pressable } from 'react-native';
import { type IconType } from '../icons/Icon';

type Props = {
	onPress: () => void;
	Icon: IconType;
	color: string;
	size: number;
	backgroundColor: string;
	iconColor: string;
};

export const RoundButton = ({
	onPress,
	Icon,
	color,
	size,
	backgroundColor,
	iconColor,
}: Props) => (
	<Pressable
		onPress={onPress}
		style={({ pressed }) =>
			css({
				width: size,
				aspectRatio: 1,
				borderRadius: size / 2,
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: pressed ? 'white' : backgroundColor,
				borderWidth: 1.5,
				borderColor: color,
			})
		}
	>
		{({ pressed }) => (
			<Icon size={size / 2} color={pressed ? backgroundColor : iconColor} />
		)}
	</Pressable>
);
