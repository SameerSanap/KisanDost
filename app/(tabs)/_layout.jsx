import { Tabs } from "expo-router";
import { Image, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import icons from "../../constants/icons";

function TabIcon({ color, focused, icon }) {
  const size = focused ? 40 : 22; // Increase size when focused

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 17,
      }}
    >
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          width: size,
          height: size + 6, // Slightly taller to maintain aspect ratio
          tintColor: color,
        }}
      />
    </View>
  );
}

export default function TabLayout() {
  return (
    <>
      <View style={{ flex: 1, backgroundColor: "#161622" }}>
        <Tabs
          screenOptions={{
            tabBarShowLabel: false,
            tabBarActiveTintColor: "#e03157",
            tabBarInactiveTintColor: "#ffffff",
            tabBarStyle: {
              backgroundColor: "#212139",
              borderTopStartRadius: 50,
              borderTopEndRadius: 50,
              height: 80,
              position: "absolute",
              left: 10,
              right: 10,
              shadowColor: "#000",
              shadowOpacity: 0.2,
              shadowRadius: 8,
              elevation: 3,
            },
          }}
        >
          <Tabs.Screen
            name="home"
            options={{
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <TabIcon icon={icons.home} focused={focused} />
              ),
            }}
          />
          <Tabs.Screen
            name="plant"
            options={{
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <TabIcon icon={icons.plant} focused={focused} />
              ),
            }}
          />
          <Tabs.Screen
            name="cattel"
            options={{
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <TabIcon icon={icons.cattel} focused={focused} />
              ),
            }}
          />
          <Tabs.Screen
            name="profile"
            options={{
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <TabIcon icon={icons.profile} focused={focused} />
              ),
            }}
          />
        </Tabs>
      </View>
      <StatusBar style="light" />
    </>
  );
}
