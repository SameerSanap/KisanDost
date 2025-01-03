import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../components/FormField";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import Button from "../../components/Button";
import { Register } from "../../lib/Database";

export default function SignUp() {
  const [form, setForm] = useState({
    userName: "",
    email: "",
    password: "",
    contact: "",
    confirmPassword: "",
  });

  async function handleSubmit() {
    const { userName, email, password, contact, confirmPassword } = form;

    // Validate fields
    if (!userName || !email || !password || !contact || !confirmPassword) {
      Alert.alert("Error", "Please fill all fields.");
      return;
    }

    // Validate password confirmation
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match.");
      return;
    }

    try {
      await Register(form);
      Alert.alert("Success", "You are registered successfully!");
    } catch (error) {
      const errorMessage =
        (error && error.message) || "An unknown error occurred.";
      Alert.alert("Error", errorMessage);
    }
  }

  return (
    <SafeAreaView className="bg-primary flex-1">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <ScrollView
            contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 16 }}
            keyboardShouldPersistTaps="handled"
          >
            {/* Title */}
            <View className="flex justify-center items-center w-full mt-8">
              <Text className="text-white text-2xl font-psemibold">
                Register
              </Text>
            </View>

            {/* Image */}
            <View className="flex justify-center items-center mt-4">
              <Image
                source={require("../../assets/sideImages/intro.png")}
                className="w-60 h-40 rounded-2xl"
              />
            </View>

            {/* Form Fields */}
            <View className="mt-6 gap-6">
              <FormField
                title="Full Name"
                value={form.userName}
                handleChange={(e) => setForm({ ...form, userName: e })}
                placeholder="Name"
              />
              <FormField
                title="Email"
                value={form.email}
                handleChange={(e) => setForm({ ...form, email: e })}
                placeholder="email@example.com"
                keyboardType="email-address"
              />
              <FormField
                title="Contact No."
                value={form.contact}
                handleChange={(e) => setForm({ ...form, contact: e })}
                placeholder="Mobile Number"
                keyboardType="phone-pad"
              />
              <FormField
                title="Password"
                secureTextEntry
                value={form.password}
                handleChange={(e) => setForm({ ...form, password: e })}
                placeholder="******"
              />
              <FormField
                title="Confirm Password"
                secureTextEntry
                value={form.confirmPassword}
                handleChange={(e) => setForm({ ...form, confirmPassword: e })}
                placeholder="******"
              />
            </View>

            {/* Button */}
            <View className="mt-6">
              <Button title="Register" onPress={handleSubmit} />
            </View>

            {/* Redirect Link */}
            <View className="mt-4">
              <Text className="text-gray-300 text-center text-lg">
                Already have an account?{" "}
                <Link href={"/signIn"} className="text-red-400 font-psemibold">
                  Sign In
                </Link>
              </Text>
            </View>

            <StatusBar style="light" />
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
