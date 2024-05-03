import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { getBrandedText } from "../../shared/fonts/getBrandedText";

export function MatchCard({ match }: any) {
  return (
    <View style={styles.card}>
      <Image style={styles.profilePic} source={{ uri: match.imageUrl }} />
      <View style={styles.overlay}>
        <View style={styles.matchBadge}>
          <Text style={styles.matchPercent}>{match.percentMatch}% Match</Text>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.distanceBadge}>
            <Text style={styles.distance}>{match.distance}km away</Text>
          </View>
          <Text style={styles.nameAge}>
            <Label>{`${match.name} - ${match.age} `} </Label>
            <View
              style={[
                styles.onlineIndicator,
                { backgroundColor: match.isOnline ? "#34C759" : "#FF3B30" },
              ]}
            />
          </Text>

          <Text style={styles.city}>{match.city}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 163,
    height: 232,
    borderRadius: 20,
    overflow: "hidden",
    margin: 10,
    borderWidth: 4,
    borderColor: "#DD88CF",
  },
  profilePic: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    padding: 10,
    justifyContent: "flex-end",
  },
  matchBadge: {
    position: "absolute",
    top: -9,
    left: "50%",
    transform: [{ translateX: -49 }],
    width: 98,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#DD88CF",
    justifyContent: "center",
    alignItems: "center",
  },
  matchPercent: {
    fontSize: 14,
    marginTop: 3,
    color: "#FFF",
    fontFamily: "roboto-medium",
  },
  infoContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  distanceBadge: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#FFFFFF",
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  distance: {
    fontSize: 14,
    color: "#FFFFFF",
  },
  nameAgeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  nameAge: {
    fontSize: 16,
    color: "#FFFFFF",
  },
  onlineIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginLeft: 5,
  },
  city: {
    fontSize: 14,
    color: "#FFFFFF",
  },
});

const Label = getBrandedText({
  fontSize: 22,
  fontFamily: "roboto-bold",
  color: "white",
});
