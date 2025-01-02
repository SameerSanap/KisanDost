import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import icons from "../constants/icons";

export default function FormField({
  title,
  value,
  handleChange,
  placeholder,
  style,
  text,
  ...prop
}) {
  const [showPass, setShowPass] = useState(false);

  return (
    <View className={`space-y-2 ${style}`}>
      {/* Title */}
      <Text
        className={`text-base ${
          text ? "text-black" : "text-white"
        } font-pmedium`}
      >
        {title}
      </Text>

      {/* Input Field */}
      <View className="h-16 px-4 border-2 bg-white rounded-2xl flex-row items-center">
        <TextInput
          className="flex-1 text-black"
          value={value}
          placeholderTextColor="gray"
          placeholder={placeholder}
          onChangeText={handleChange}
          secureTextEntry={
            (title === "Password" || title === "Confirm Password") && !showPass
          }
          keyboardType={prop.keyboardType || "default"}
        />

        {/* Toggle Password Visibility */}
        {(title === "Password" || title === "Confirm Password") && (
          <TouchableOpacity onPress={() => setShowPass(!showPass)}>
            <Image
              source={!showPass ? icons.eye : icons.eyeHide}
              className="h-8 w-8"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
