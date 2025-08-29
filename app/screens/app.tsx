// App.tsx
import React, { useRef } from "react";
import { View, StyleSheet, FlatList, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import FramerIcon from "@/assets/images/logo/framer_symbol.png";
import FigmaIcon from "@/assets/images/logo/figma.png";
import NotionIcon from "@/assets/images/logo/notion.png";
import SlackIcon from "@/assets/images/logo/slack.png";
import MiroIcon from "@/assets/images/logo/Miro-Icon.png.png";
import LoomIcon from "@/assets/images/logo/loom_icon.jpeg.png";
import Strip from "@/assets/images/logo/strip.png";
import ChatgptIcon from "@/assets/images/logo/chatgpt.png";
import CanvaIcon from "@/assets/images/logo/canva.png";
import BlenderIcon from "@/assets/images/logo/blender_icon.png";
import Footer from "../component/Footer";
import GlassCard from "../component/MainCard/Subscription";
import Toolkit from "../component/MainCard/Toolkit";

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
              return <GlassCard key={i} sub={sub} i={i} icons={icons} />;
            })}
          </View>
        ) : (
          // —— Toolkits (glassy tilted cards)
          <View>
            {item.content.map((kit: any, i: number) => (
              <Toolkit key={i} kit={kit} index={i} icons={icons} />
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
});
