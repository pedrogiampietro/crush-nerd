import styled, { css } from "@emotion/native";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRoute, type RouteProp } from "@react-navigation/native";
import { FadeInDown } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BackgroundGradient } from "../shared/components/BackgroundGradient";
import { type RootStackParamList } from "../shared/components/Navigator";
import { Page } from "../shared/components/Page";
import { getAnimatedBrandedText } from "../shared/fonts/getBrandedText";
import { NerdMatchProfileAvatar } from "./NerdMatchProfileAvatar";
import { NerdTalkWithButton } from "./NerdTalkWithButton";
import { Ionicons } from "@expo/vector-icons";
import { nerds } from "./nerds";

export type MatchPageParams = {
  nerdName: string;
};

export const NerdMatchPage = () => {
  const { params } = useRoute<RouteProp<RootStackParamList, "NerdMatch">>();
  const { bottom } = useSafeAreaInsets();
  const nerd = nerds.find((_) => _.name === params.nerdName);

  if (nerd === undefined) {
    throw new Error(`Can't find a nerd with name ${params.nerdName}.`);
  }

  return (
    <Container>
      <BackgroundGradient />
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconContainer}>
          <Ionicons name="arrow-back" size={16} color="#FFF" />
        </TouchableOpacity>
      </View>
      <NerdMatchProfileAvatar imageUrl={nerd.imageUrl} />
      <Label entering={FadeInDown.delay(300)}>It's a match!</Label>
      <ButtonWrapper style={css({ bottom: bottom + 16 })}>
        <NerdTalkWithButton nerdName={nerd.name} />
      </ButtonWrapper>
    </Container>
  );
};

const Container = styled(Page)({
  justifyContent: "center",
  alignItems: "center",
  gap: 16,
});

const ButtonWrapper = styled.View({
  position: "absolute",
  left: 16,
  right: 16,
});

const Label = getAnimatedBrandedText({
  color: "white",
  fontSize: 34,
  fontFamily: "pacifico",
});

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    top: 70,
    left: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    borderColor: "#FFF",
    borderWidth: 1,
    borderRadius: 24,
    width: 32,
    height: 32,
  },
  title: {
    fontSize: 24,
    color: "#22172A",
  },
});
