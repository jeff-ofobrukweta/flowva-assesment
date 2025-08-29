// App.tsx
import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";

import FramerIcon from "../../assets/images/logo/framer_symbol.png";
import FigmaIcon from "../../assets/images/logo/figma.png";
import NotionIcon from "../../assets/images/logo/notion.png";
import SlackIcon from "../../assets/images/logo/slack.png";
import MiroIcon from "../../assets/images/logo/Miro-Icon.png.png";
import LoomIcon from "../../assets/images/logo/loom_icon.jpeg.png";
import Strip from "../../assets/images/logo/strip.png";
import ChatgptIcon from "../../assets/images/logo/chatgpt.png";
import CanvaIcon from "../../assets/images/logo/canva.png";
import BlenderIcon from "../../assets/images/logo/blender_icon.png";
import ProgressDots from "../component/ProgressDots";
import Footer from "../component/Footer";

const { width } = Dimensions.get("window");

const icons: Record<string, any> = {
  framer: FramerIcon,
  figma: FigmaIcon,
  notion: NotionIcon,
  chatgpt: ChatgptIcon,
  slack: SlackIcon,
  miro: MiroIcon,
  loom: LoomIcon,
  strip: Strip,
  canva: CanvaIcon,
  adaptive: CanvaIcon,
  blender: BlenderIcon,
};

const slides = [
  {
    key: "subscriptions",
    title: "Keep track of every subscription",
    subtitle: "Stay on top of what you pay for.",
    content: [
      {
        name: "Framer",
        price: "$12",
        days: "Billed in 4 days",
        actions: true,
        icon: "framer",
      },
      { name: "Figma", price: "$12", days: "Billed in 9 days", icon: "figma" },
      {
        name: "Notion",
        price: "$12",
        days: "Billed in 16 days",
        icon: "notion",
      },
      {
        name: "ChatGPT",
        price: "$12",
        days: "Billed in 24 days",
        icon: "chatgpt",
      },
      {
        name: "Blender",
        price: "$12",
        days: "Billed in 4 days",
        icon: "blender",
      },
      {
        name: "Notion",
        price: "$12",
        days: "Billed in 16 days",
        icon: "notion",
      },
    ],
  },
  {
    key: "toolkits",
    title: "Work like the best",
    subtitle: "Discover proven tools from the people who master their craft",
    content: [
      {
        title: "Designers Toolkit",
        tools: ["figma", "framer", "canva"],
        desc: "1,200 creatives trust this stack",
      },
      {
        title: "Indie Hacker’s Essentials",
        tools: ["notion", "miro", "strip"],
        desc: "Curated by Sam Ortega  building profitable products solo",
      },
      {
        title: "Remote Team Starter Pack",
        tools: ["slack", "miro", "loom"],
        desc: "Curated by Kendra Holt helping distributed teams thrive",
      },
    ],
  },
];

const App = () => {
  const flatListRef = useRef<FlatList>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);

  const renderSlide = ({ item }: any) => (
    <LinearGradient colors={["#fce7f3", "#f3e8ff"]} style={styles.slide}>
      {/* Horizontal pastel gradient */}
      <LinearGradient
        colors={[
          "#F8DCDC", // soft peach left
          "#F9E7EB", // pinkish fade
          "#E6CBF3", // purple in center
          "#F0DBF6", // lighter lavender blending center-right
          "#FDE0E0", // pastel pink right
        ]}
        locations={[0, 0.25, 0.5, 0.7, 1]} // push purple toward middle
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={StyleSheet.absoluteFill}
      />

      {/* Vertical fade overlay */}
      <LinearGradient
        colors={["#F8DCDC", "#F9E7EB", "#FFFFFF"]}
        locations={[0, 0.75, 1]} // matches your CSS: fade until 85%
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={StyleSheet.absoluteFill}
      />

      <View style={styles.contentContainer}>
        {item.key === "subscriptions" ? (
          // —— Subscriptions (glassy cards)
          <View>
            {item.content.map((sub: any, i: number) => {
              const dimmed = i >= 2;
              return (
                <View key={i} style={styles.glassWrapper}>
                  <BlurView
                    intensity={65}
                    tint="light"
                    style={styles.glassBackground}
                  >
                    <LinearGradient
                      colors={[
                        "rgba(255,255,255,0.25)",
                        "rgba(255,255,255,0.05)",
                      ]}
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
                          <Text
                            style={[styles.cardTitle, dimmed && styles.dimText]}
                          >
                            {sub.name}
                          </Text>
                        </View>
                        <View style={styles.rightGroup}>
                          <Text
                            style={[styles.price, dimmed && styles.dimText]}
                          >
                            {sub.price}
                          </Text>
                          <Text
                            style={[
                              styles.billingText,
                              dimmed && styles.dimBilling,
                            ]}
                          >
                            {sub.days}
                          </Text>
                        </View>
                      </View>

                      {sub.actions && i === 0 && (
                        <View style={styles.actionRow}>
                          <TouchableOpacity
                            style={[styles.chip, styles.chipView]}
                          >
                            <Text style={styles.chipViewText}>View</Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            style={[styles.chip, styles.chipNeutral]}
                          >
                            <Text style={styles.chipNeutralText}>Remind</Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            style={[styles.chip, styles.chipCancel]}
                          >
                            <Text style={styles.chipCancelText}>Cancel</Text>
                          </TouchableOpacity>
                        </View>
                      )}
                    </LinearGradient>
                  </BlurView>
                </View>
              );
            })}
          </View>
        ) : (
          // —— Toolkits (glassy tilted cards)
          <View>
            {item.content.map((kit: any, i: number) => (
              <View
                key={i}
                style={[
                  styles.glassWrapper,
                  {
                    transform: [
                      { rotate: i === 1 ? "1deg" : i === 2 ? "-1deg" : "0deg" },
                    ],
                  },
                ]}
              >
                <BlurView
                  intensity={40}
                  tint="light"
                  style={styles.glassBackground}
                >
                  <LinearGradient
                    colors={[
                      "rgba(255,255,255,0.55)",
                      "rgba(255,255,255,0.25)",
                    ]}
                    style={styles.gradientOverlay}
                  >
                    <Text style={styles.cardTitle}>{kit.title}</Text>
                    <View style={[styles.row, { marginVertical: 10 }]}>
                      {kit.tools.map((tool: any, idx: number) => (
                        <Image
                          key={idx}
                          source={icons[tool]}
                          style={styles.toolIcon}
                        />
                      ))}
                    </View>
                    <Text style={styles.subText}>{kit.desc}</Text>
                  </LinearGradient>
                </BlurView>
              </View>
            ))}
          </View>
        )}
      </View>

      {/* Footer */}
      <Footer
        title={item.title}
        subtitle={item.subtitle}
        totalSlides={slides.length}
        activeIndex={activeIndex}
        onGetStarted={() => console.log("CTA pressed")}
      />
    </LinearGradient>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={slides}
        renderItem={renderSlide}
        keyExtractor={(item) => item.key}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(e) => {
          const index = Math.round(e.nativeEvent.contentOffset.x / width);
          setActiveIndex(index);
        }}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  slide: { width, flex: 1, padding: 20, justifyContent: "space-between" },
  contentContainer: { flex: 1, marginTop: 40 },

  // —— Glass effect shared
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

  subCardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftGroup: { flexDirection: "row", alignItems: "center" },
  rightGroup: { alignItems: "flex-end" },

  billingText: { fontSize: 11, color: "#6B7280", marginTop: 2 },
  dimIcon: { tintColor: "#CBD5E1" },
  dimText: { color: "#9CA3AF" },
  dimBilling: { color: "#A1A1AA" },

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

  // —— Toolkit view
  row: { flexDirection: "row", alignItems: "center" },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8,
    resizeMode: "contain",
  },
  toolIcon: {
    width: 32,
    height: 32,
    marginRight: 6,
    resizeMode: "contain",
  },
  cardTitle: { fontSize: 16, fontWeight: "600" },
  price: { fontSize: 14, fontWeight: "600", color: "#111827" },
  subText: { fontSize: 12, color: "#666" },

  // —— Footer
  footer: { alignItems: "center", marginBottom: 20 },
  title: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    color: "#767676",
    marginBottom: 12,
  },

  dots: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
    backgroundColor: "#11111114", // transparent black
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

  cta: {
    borderRadius: 30,
    overflow: "hidden",
    width: "100%",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  ctaInner: { paddingVertical: 14, borderRadius: 30 },
  ctaText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
