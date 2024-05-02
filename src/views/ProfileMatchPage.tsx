import React, { useCallback, useRef } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
  interpolate,
} from "react-native-reanimated";
import { type NerdAction } from "../nerds/NerdAction";
import { NerdCardBottomView } from "../nerds/NerdCardBottomView";
import { SwipeableCardStackRef } from "react-native-swipeable-card-stack";
import { MatchBadge } from "../shared/components/MatchBadge";

function BottomSheet({ isOpen, toggleSheet, duration = 500, children }: any) {
  const screenHeight = Dimensions.get("window").height;
  const progress = useDerivedValue(() =>
    withTiming(isOpen.value ? 0 : 1, { duration })
  );

  const sheetStyle = useAnimatedStyle(() => ({
    height: interpolate(
      progress.value,
      [0, 1],
      [screenHeight / 2, screenHeight]
    ),
    transform: [{ translateY: interpolate(progress.value, [0, 1], [0, -200]) }],
  }));

  return (
    <Animated.View style={[styles.card, sheetStyle]}>
      <TouchableOpacity style={styles.maximizeIcon} onPress={toggleSheet}>
        <Ionicons name="chevron-up" size={24} color="#000" />
      </TouchableOpacity>
      <View style={{ flex: 1, height: "100%" }}>
        <ScrollView>{children}</ScrollView>
      </View>
    </Animated.View>
  );
}

export function ProfileMatchPage({ route }: any) {
  const { match } = route.params;
  const isOpen = useSharedValue(true);
  const ref = useRef<SwipeableCardStackRef>(null);

  const toggleSheet = () => {
    isOpen.value = !isOpen.value;
  };

  const onAction = useCallback((action: NerdAction) => {
    if (action === "swipe-left") {
      ref.current?.swipe("left");
    }
    if (action === "swipe-right") {
      ref.current?.swipe("right");
    }
    if (action === "undo") {
      ref.current?.unswipe();
    }
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.profilePic} source={{ uri: match.imageUrl }} />
      <View style={styles.overlay}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={24} color="#FFF" />
          </TouchableOpacity>
          <Text style={styles.distance}>{match.distance}km away</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.nameAge}>
            {match.name}, {match.age}
          </Text>
          <Text style={styles.city}>{match.city}</Text>
          <View style={styles.matchContainer}>
            <MatchBadge match={match} />
            <Text style={styles.matchText}>Match</Text>
          </View>
        </View>
      </View>
      <BottomSheet isOpen={isOpen} toggleSheet={toggleSheet}>
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
        <Text style={styles.interestTitle}>Interest</Text>
        <Text style={styles.interestText}>🍃 Nature</Text>
        <Text style={styles.interestText}>🏝 Travel</Text>
        <Text style={styles.interestText}>✍🏻 Writing</Text>
        <Text style={styles.interestText}>🙂 People</Text>
        <Text style={styles.interestText}>💪 Gym & Fitness</Text>
      </BottomSheet>

      <View>
        <NerdCardBottomView onAction={onAction} sizeButtons="small" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  profilePic: {
    width: "100%",
    height: 450,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 471,
    padding: 10,
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 50,
  },
  distance: {
    fontSize: 16,
    color: "#FFF",
  },
  infoContainer: {
    alignItems: "center",
  },
  nameAge: {
    fontFamily: "roboto-bold",
    fontSize: 42,
    color: "#FFF",
  },
  city: {
    fontSize: 16,
    color: "#FFF",
  },
  matchContainer: {
    width: 145,
    height: 65,
    backgroundColor: "#4B164C",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    padding: 10,
    borderRadius: 50,
    marginBottom: 70,
    marginTop: 15,
  },
  matchText: {
    fontFamily: "roboto-bold",
    fontSize: 20,
    color: "#FFF",
  },
  card: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingTop: 55,
    paddingLeft: 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: -35,
    marginBottom: 70,
  },
  maximizeIcon: {
    position: "absolute",
    top: 10,
    left: "50%",
    transform: [{ translateX: -12 }],
  },
  aboutTitle: {
    fontSize: 24,
    color: "#000",
  },
  aboutText: {
    fontSize: 16,
    color: "#000",
  },
  interestTitle: {
    fontSize: 24,
    color: "#000",
    marginTop: 10,
  },
  interestText: {
    fontSize: 16,
    color: "#000",
  },
});
