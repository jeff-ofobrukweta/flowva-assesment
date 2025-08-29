import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import ProgressDots from "./ProgressDots";

interface FooterProps {
  title: string;
  subtitle: string;
  totalSlides: number;
  activeIndex: number;
  onGetStarted?: () => void;
}

const Footer: React.FC<FooterProps> = ({
  title,
  subtitle,
  totalSlides,
  activeIndex,
  onGetStarted,
}) => {
  return (
    <View style={styles.footer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>

      {/* Progress dots */}
      <ProgressDots total={totalSlides} activeIndex={activeIndex} />

      {/* CTA */}
      <TouchableOpacity style={styles.cta} onPress={onGetStarted}>
        <LinearGradient colors={["#111", "#000"]} style={styles.ctaInner}>
          <Text style={styles.ctaText}>
            {activeIndex === totalSlides - 1 ? "Let's go" : "Get started"}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#666",
    marginBottom: 16,
  },
  cta: { width: "100%", marginTop: 16 },
  ctaInner: {
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  ctaText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
