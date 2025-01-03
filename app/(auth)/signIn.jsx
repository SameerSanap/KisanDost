import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Alert, Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/Button";
import FormField from "../../components/FormField";
import Login from "../../lib/Database";

export default function signIn() {
  const [form, setForm] = useState({ email: "", password: "" });

  // Login Function
  async function handelSignIn() {
    const { email, password } = form;
    if (!email || !password) {
      Alert.alert("Error", "Please Fill All Fields");
      return;
    }
    try {
      await Login(form);
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Failed to Login");
    }
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
        <FormField
          title="Email"
          value={form.email}
          handleChange={(e) => setForm({ ...form, email: e })}
          keyboardType="email-address"
        />
        <FormField
          title="Password"
          value={form.password}
          handleChange={(e) => setForm({ ...form, password: e })}
        />

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
