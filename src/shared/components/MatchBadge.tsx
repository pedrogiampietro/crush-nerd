import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

export function MatchBadge({ match }: any) {
  return (
    <View style={styles.matchBadge}>
      <AnimatedCircularProgress
        size={48}
        width={4.5}
        fill={match.percentMatch}
        tintColor="#DD88CF"
        backgroundColor="#592057"
        rotation={0}
      >
        {(fill) => <Text style={styles.matchPercent}>{Math.round(fill)}%</Text>}
      </AnimatedCircularProgress>
    </View>
  );
}

const styles = StyleSheet.create({
  matchBadge: {
    width: 42,
    height: 42,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4B164C",
  },
  matchPercent: {
    fontSize: 16,
    fontFamily: "roboto-medium",
    color: "#FFF",
  },
});
