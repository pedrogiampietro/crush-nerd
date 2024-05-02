import styled from "@emotion/native";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaFrame } from "react-native-safe-area-context";
import { colors } from "../shared/colors";
import { RoundButton } from "../shared/components/RoundButton";
import { getBrandedText } from "../shared/fonts/getBrandedText";
import { CloseIcon } from "../shared/icons/CloseIcon";
import { HeartIcon } from "../shared/icons/HeartIcon";
import { UndoIcon } from "../shared/icons/UndoIcon";
import { type NerdAction } from "./NerdAction";

type Props = {
  name?: string;
  age?: number;
  onAction: (action: NerdAction) => void;
  sizeButtons: string;
};

export const NerdCardBottomView = ({
  name,
  age,
  onAction,
  sizeButtons = "large",
}: Props) => {
  const { height } = useSafeAreaFrame();
  return (
    <Container>
      <LinearGradient
        colors={["rgba(0,0,0,0.8)", "transparent"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: 96,
        }}
      ></LinearGradient>
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.8)"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: height / 2,
        }}
      ></LinearGradient>

      <ContentContainer>
        {name && name.length > 0 && age && age > 0 ? (
          <Label>{`${name} - ${age}`}</Label>
        ) : null}

        <ButtonsContainer>
          <RoundButton
            Icon={CloseIcon}
            onPress={() => {
              onAction("swipe-left");
            }}
            color={colors.swipeLeft}
            iconColor={colors.swipeLeftIcon}
            backgroundColor={colors.swipeLeft}
            size={sizeButtons === "small" ? 50 : 80}
          />
          <RoundButton
            Icon={UndoIcon}
            onPress={() => {
              onAction("undo");
            }}
            color={colors.unswipe}
            iconColor={colors.unswipeIcon}
            backgroundColor={colors.unswipe}
            size={sizeButtons === "small" ? 40 : 70}
          />
          <RoundButton
            Icon={HeartIcon}
            onPress={() => {
              onAction("swipe-right");
            }}
            color={colors.swipeRight}
            iconColor={colors.swipeRightIcon}
            backgroundColor={colors.swipeRight}
            size={sizeButtons === "small" ? 50 : 80}
          />
        </ButtonsContainer>
      </ContentContainer>
    </Container>
  );
};

const Container = styled.View({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  justifyContent: "flex-end",
});

const ContentContainer = styled.View({
  padding: 32,
  gap: 16,
});

const ButtonsContainer = styled.View({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});

const Label = getBrandedText({
  fontSize: 40,
  fontFamily: "roboto-bold",
  color: "white",
});
