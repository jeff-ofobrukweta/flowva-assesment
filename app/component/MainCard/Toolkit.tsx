import React from "react";
import { View, Text, Image, StyleSheet, ImageSourcePropType } from "react-native";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";

interface GlassCardProps {
  kit: {
    title: string;
    tools: string[];
    desc: string;
  };
  index: number;
  icons: Record<string, ImageSourcePropType>;
}

const Toolkit: React.FC<GlassCardProps> = ({ kit, index, icons }) => {
  return (
    <View
      style={[
        styles.glassWrapper,
        {
          transform: [
            { rotate: index === 1 ? "1deg" : index === 2 ? "-1deg" : "0deg" },
          ],
        },
      ]}
    >
      <BlurView intensity={40} tint="light" style={styles.glassBackground}>
        <LinearGradient
          colors={["rgba(255,255,255,0.55)", "rgba(255,255,255,0.25)"]}
          style={styles.gradientOverlay}
        >
          {/* Title */}
          <Text style={styles.cardTitle}>{kit.title}</Text>

          {/* Tool Icons */}
          <View style={styles.row}>
            {kit.tools.map((tool, idx) => (
              <Image
                key={idx}
                source={icons[tool]}
                style={styles.toolIcon}
                resizeMode="contain"
              />
            ))}
          </View>

          {/* Description */}
          <Text style={styles.subText}>{kit.desc}</Text>
        </LinearGradient>
      </BlurView>
    </View>
  );
};

export default Toolkit;

const styles = StyleSheet.create({
  glassWrapper: {
    borderRadius: 16,
    marginVertical: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 3,
    overflow: "hidden",
  },
  glassBackground: {
    borderRadius: 16,
    overflow: "hidden",
  },
  gradientOverlay: {
    borderRadius: 16,
    padding: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    marginVertical: 10,
  },
  toolIcon: {
    width: 40,
    height: 40,
    marginRight: 8,
    borderRadius: 8,
  },
  subText: {
    fontSize: 14,
    color: "#444",
    marginTop: 6,
  },
});
