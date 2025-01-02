import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../components/FormField";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import Button from "../../components/Button";

export default function SignUp() {
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
              <FormField title="Full Name" />
              <FormField title="Email" />
              <FormField title="Contact No." />
              <FormField title="Password" secureTextEntry />
              <FormField title="Confirm Password" secureTextEntry />
            </View>

            {/* Button */}
            <View className="mt-6">
              <Button title="Register" />
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
