// components/ProgressDots.tsx
import React from "react";
import { View, StyleSheet } from "react-native";

interface Props {
  total: number;
  activeIndex: number;
}

const ProgressDots: React.FC<Props> = ({ total, activeIndex }) => {
  return (
    <View style={styles.dots}>
      {Array.from({ length: total }).map((_, i) => (
        <View
          key={i}
          style={[styles.dot, activeIndex === i && styles.activeDot]}
        />
      ))}
    </View>
  );
};

export default ProgressDots;

const styles = StyleSheet.create({
  dots: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
    backgroundColor: "#11111114", // subtle translucent background
    padding: 5,
    borderRadius: 100,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#cccccc",
    marginHorizontal: 4,
  },
  activeDot: { backgroundColor: "#000" },
});
