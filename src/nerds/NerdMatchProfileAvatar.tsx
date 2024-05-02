import styled from '@emotion/native';
import { Image } from 'expo-image';
import Animated, { FadeInDown } from 'react-native-reanimated';

const SIZE = 180;

type Props = {
	imageUrl: string | undefined;
};

export const NerdMatchProfileAvatar = ({ imageUrl }: Props) => (
	<Container entering={FadeInDown.delay(300)}>
		<AvatarImage source={{ uri: imageUrl }} />
	</Container>
);

const Container = styled(Animated.View)({
	width: SIZE,
	aspectRatio: 1,
	borderRadius: SIZE / 2,
	borderWidth: 6,
	borderColor: '#DD88CF',
	overflow: 'hidden',
});

const AvatarImage = styled(Image)({
	width: '100%',
	height: '100%',
});
