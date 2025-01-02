import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-primary">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1 justify-center items-center ">
          <Image
            source={require("../assets/images/logo.png")}
            className="h-[30%] w-[70%] rounded-2xl mb-5"
          />
          <Button
            title="Continue"
            style="botom-4 p-4"
            onPress={() => {
              router.push("/signIn");
            }}
          />
        </View>
      </ScrollView>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}
