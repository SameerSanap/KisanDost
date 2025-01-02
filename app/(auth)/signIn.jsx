import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../components/FormField";
import Button from "../../components/Button";
export default function signIn() {
  function handelSignIn() {
    router.replace("/home");
  }
  return (
    <SafeAreaView className="bg-primary flex-1 ">
      <View className="flex justify-center items-center w-screen mt-8">
        <Text className="text-white text-2xl font-psemibold">SignIn</Text>
      </View>
      <View className="flex justify-center items-center">
        <Image
          source={require("../../assets/sideImages/intro.png")}
          className="w-[40%] h-[30%] rounded-2xl"
        />
      </View>
      <View className="p-2 gap-6">
        <FormField title="Email" />
        <FormField title="Password" />

        {/* SignIn Button */}
        <Button title="Sign In" onPress={handelSignIn} />

        <Text className=" text-gray-300 text-center text-lg">
          Register{" "}
          <Link href={"/signUp"} className="text-red-400 font-psemibold">
            New Account.
          </Link>
        </Text>
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}
