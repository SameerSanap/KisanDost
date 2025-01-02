import * as ImagePicker from "expo-image-picker"; // Import ImagePicker
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/Button";
import icons from "../../constants/icons";

export default function CattelScreen() {
  const [cattel, setCattelImage] = useState(null);

  // Request media library permissions on component mount
  useEffect(() => {
    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permission Denied",
          "Permission to access the media library is required to upload images."
        );
      }
    })();
  }, []);

  const openPicker = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images"],
        // allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setCattelImage(result.assets[0]);
      }
    } catch (error) {
      Alert.alert("Error", "Something went wrong while selecting the image.");
    }
  };

  const handleSubmit = () => {
    if (!cattel) {
      Alert.alert("Error", "Please upload an image of the plant.");
      return;
    }

    // Further processing or form submission logic goes here
    Alert.alert("Success", "Plant information submitted successfully!");
  };

  // cancel Image
  function handleCancel() {
    setCattelImage(null);
  }

  return (
    <SafeAreaView className="h-full bg-primary ">
      <ScrollView className="px-4 my-6 ">
        <Text className="text-2xl text-white font-fsemibold">
          Upload Cattel Information
        </Text>

        <View className="mt-7 space-y-2">
          <Text className="text-2xl text-white font-bold m-2">
            Animal Image
          </Text>
          <TouchableOpacity onPress={openPicker}>
            {cattel ? (
              <>
                <Image
                  source={{ uri: cattel.uri }}
                  resizeMode="cover"
                  className="w-full h-64 rounded-2xl"
                />
                <TouchableOpacity onPress={handleCancel}>
                  <Image source={icons.cancel} className="h-8 w-8" />
                </TouchableOpacity>
              </>
            ) : (
              <View
                className="w-full h-16 px-4 bg-black-100 rounded-xl justify-center items-center border-2
              border-black-200 flex-row space-x-2"
              >
                <Image
                  source={icons.upload}
                  className="w-5 h-5 "
                  resizeMode="contain"
                />
                <Text className="text-sm text-gray-100 font-pmedium">
                  Choose File
                </Text>
              </View>
            )}
          </TouchableOpacity>
        </View>

        <View className="mt-10">
          <Button onPress={handleSubmit} title="Submit" />
        </View>
      </ScrollView>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}
