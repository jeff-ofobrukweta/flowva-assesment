import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";

const GlassCard = ({ sub, i, icons }: any) => {
  const dimmed = i >= 2;

  return (
    <View style={styles.glassWrapper}>
      <BlurView intensity={65} tint="light" style={styles.glassBackground}>
        <LinearGradient
          colors={["rgba(255,255,255,0.25)", "rgba(255,255,255,0.05)"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradientOverlay}
        >
          <View style={styles.subCardHeader}>
            <View style={styles.leftGroup}>
              <Image
                source={icons[sub.icon]}
                style={[styles.icon, dimmed && styles.dimIcon]}
              />
              <Text style={[styles.cardTitle, dimmed && styles.dimText]}>
                {sub.name}
              </Text>
            </View>
            <View style={styles.rightGroup}>
              <Text style={[styles.price, dimmed && styles.dimText]}>
                {sub.price}
              </Text>
              <Text style={[styles.billingText, dimmed && styles.dimBilling]}>
                {sub.days}
              </Text>
            </View>
          </View>

          {sub.actions && i === 0 && (
            <View style={styles.actionRow}>
              <TouchableOpacity style={[styles.chip, styles.chipView]}>
                <Text style={styles.chipViewText}>View</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.chip, styles.chipNeutral]}>
                <Text style={styles.chipNeutralText}>Remind</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.chip, styles.chipCancel]}>
                <Text style={styles.chipCancelText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          )}
        </LinearGradient>
      </BlurView>
    </View>
  );
};

export default GlassCard;

const styles = StyleSheet.create({
  glassWrapper: {
    borderRadius: 12,
    marginBottom: 16,
    minHeight: 82,
    overflow: "hidden",

    // Glass border
    borderWidth: 1,
    borderColor: "#FFD7D7",

    // iOS shadow
    shadowColor: "#000",
    shadowOpacity: 0.25, // softer glow
    shadowRadius: 25, // more spread
    shadowOffset: { width: 0, height: 10 },

    // Android shadow
    elevation: 12, // stronger elevation for glass effect
  },
  glassBackground: {
    borderRadius: 12,
    overflow: "hidden",
  },
  gradientOverlay: {
    padding: 16,
    borderRadius: 12,
    minHeight: 82,
    backgroundColor: "rgba(255,255,255,0.1)", // subtle white tint
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8,
    resizeMode: "contain",
  },
  leftGroup: { flexDirection: "row", alignItems: "center" },
  rightGroup: { alignItems: "flex-end" },

  subCardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  billingText: { fontSize: 11, color: "#6B7280", marginTop: 2 },
  dimIcon: { tintColor: "#CBD5E1" },
  dimText: { color: "#9CA3AF" },
  dimBilling: { color: "#A1A1AA" },

  cardTitle: { fontSize: 16, fontWeight: "600" },
  price: { fontSize: 14, fontWeight: "600", color: "#111827" },
  subText: { fontSize: 12, color: "#666" },

  // —— Chips
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between", // equal spacing
    alignItems: "center",
    marginTop: 12,
    gap: 12,
  },
  chip: {
    flex: 1, // equal width
    paddingVertical: 10,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  chipView: { backgroundColor: "rgba(168, 85, 247, 0.15)" },
  chipViewText: { fontSize: 14, fontWeight: "600", color: "#7C3AED" },
  chipNeutral: { backgroundColor: "rgba(0,0,0,0.08)" },
  chipNeutralText: { fontSize: 14, fontWeight: "600", color: "#374151" },
  chipCancel: { backgroundColor: "#FFE0E0" },
  chipCancelText: { fontSize: 14, fontWeight: "700", color: "#B91C1C" },
});
