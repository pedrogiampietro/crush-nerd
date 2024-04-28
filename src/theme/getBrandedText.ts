import styled from '@emotion/native';
import { type TextStyle } from 'react-native';
import Animated from 'react-native-reanimated';

type Props = Omit<TextStyle, 'fontFamily' | 'fontWeight'> & {
	fontFamily: any;
};

export const getBrandedText = (props: Props) => styled.Text(props);

export const getAnimatedBrandedText = (props: Props) =>
	styled(Animated.Text)(props);
