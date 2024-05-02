import React, { useCallback, useRef } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  FlatList,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
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

const interests = [
  { icon: "leaf", text: "Nature" },
  { icon: "airplane", text: "Travel" },
  { icon: "pencil", text: "Writing" },
  { icon: "happy", text: "People" },
  { icon: "body", text: "Gym & Fitness" },
];

function BottomSheet({ isOpen, toggleSheet, duration = 500, children }: any) {
  const screenHeight = Dimensions.get("window").height;
  const progress = useDerivedValue(() =>
    withTiming(isOpen.value ? 0 : 1, { duration })
  );

  const sheetStyle = useAnimatedStyle(() => ({
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    top: interpolate(
      progress.value,
      [0, 1],
      [screenHeight / 2, screenHeight * 0.2]
    ),
  }));

  return (
    <Animated.View style={[styles.card, sheetStyle]}>
      <TouchableOpacity style={styles.maximizeIcon} onPress={toggleSheet}>
        <Ionicons name="chevron-up" size={24} color="#000" />
      </TouchableOpacity>
      <FlatList
        style={{ flex: 1 }}
        data={[{ key: "dummy" }]} // Adding a dummy item to prevent rendering issues
        renderItem={() => <>{children}</>}
      />
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

  function InterestCard({ icon, children }) {
    return (
      <View style={styles.interestCard}>
        <Ionicons name={icon} size={16} color="#DD88CF" />
        <Text
          style={styles.interestCardText}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {children}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image style={styles.profilePic} source={{ uri: match.imageUrl }} />
      <View style={styles.overlay}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.iconContainer}>
            <Ionicons name="arrow-back" size={24} color="#FFF" />
          </TouchableOpacity>
          <View style={styles.distanceContainer}>
            <MaterialIcons name="location-on" size={24} color="#FFF" />
            <Text style={styles.distance}>{match.distance}km away</Text>
          </View>
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
          😍. A good listener. I love having a good talk to know each other’s
          side 😍. A good listener. I love having a good talk to know each
          other’s side 😍. A good listener. I love having a good talk to know
          each other’s side 😍. A good listener. I love having a good talk to
          know each other’s side 😍. A good listener. I love having a good talk
          to know each other’s side 😍. A good listener. I love having a good
          talk to know each other’s side 😍. A good listener. I love having a
          good talk to know each other’s side 😍. A good listener. I love having
          a good talk to know each other’s side 😍. A good listener. I love
          having a good talk to know each other’s side 😍. A good listener. I
          love having a good talk to know each other’s side 😍. A good listener.
          I love having a good talk to know each other’s side 😍.
        </Text>
        <Text style={styles.interestTitle}>Interest</Text>
        <FlatList
          data={interests}
          renderItem={({ item }) => (
            <InterestCard icon={item.icon}>{item.text}</InterestCard>
          )}
          keyExtractor={(item) => item.text}
          numColumns={3}
        />
      </BottomSheet>

      <View style={styles.bottomView}>
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
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 50,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    borderColor: "#FFF",
    borderWidth: 1,
    borderRadius: 24,
    width: 48,
    height: 48,
  },
  distanceContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    borderColor: "#FFF",
    borderWidth: 1,
    borderRadius: 20,
    width: 120,
    height: 40,
  },
  distance: {
    fontSize: 14,
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
  interestCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4B164C",
    borderColor: "#FFF",
    borderWidth: 1,
    borderRadius: 20,
    width: 115,
    height: 40,
    marginBottom: 10,
    paddingLeft: 10,
    margin: 5,
  },
  interestCardText: {
    marginLeft: 10,
    color: "#FFF",
  },
  interestTitle: {
    fontSize: 24,
    color: "#000",
    marginTop: 10,
  },
  bottomView: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});
