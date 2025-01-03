import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../lib/Database";
import * as Location from "expo-location";

export default function home() {
  // async function updateUserLocation() {
  //   try {
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== "granted") {
  //       Alert.alert(
  //         "Permission Denied",
  //         "Permission to access location was denied."
  //       );
  //       return;
  //     }

  //     const location = await Location.getCurrentPositionAsync({});
  //     const userRef = doc(db, "users", user.uid);

  //     // Update location in Firestore
  //     await setDoc(
  //       userRef,
  //       {
  //         lastLocation: {
  //           latitude: location.coords.latitude,
  //           longitude: location.coords.longitude,
  //           timestamp: new Date().toISOString(),
  //         },
  //       },
  //       { merge: true }
  //     );
  //   } catch (error) {
  //     console.error("Error updating location:", error);
  //   }
  // }

  // useEffect(() => {
  //   updateUserLocation(); // Update location when the component mounts
  // }, []);

  return (
    <SafeAreaView className="bg-primary flex-1 p-3">
      <KeyboardAvoidingView>
        <View className="m-5">
          <Text className="text-2xl font-pbold text-white mt-4">
            Welcome Sameer
          </Text>
        </View>
      </KeyboardAvoidingView>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}
