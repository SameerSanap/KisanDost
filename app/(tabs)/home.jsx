import { View, Text, SafeAreaView, KeyboardAvoidingView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

export default function home() {
  return (
    <SafeAreaView className="bg-primary flex-1 p-3">
      <KeyboardAvoidingView>
        <View className="m-5">
          <View className="text-2xl font-pbold">
            <Text className="text-2xl font-pbold text-white mt-4">
              WellCome Sameer
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}
