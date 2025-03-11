import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../firebaseConfig";
import { router } from "expo-router";
import { doc, setDoc } from "firebase/firestore";
import * as Location from "expo-location";
import { Alert } from "react-native";

// Function to fetch user location
async function getUserLocation() {
  try {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission Denied",
        "Permission to access location was denied."
      );
      return null;
    }

    const location = await Location.getCurrentPositionAsync({});
    return {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
  } catch (error) {
    console.error("Error fetching location:", error);
    return null;
  }
}

// Login Function
export default async function Login(form) {
  const { email, password } = form;
  try {
    const data = await signInWithEmailAndPassword(auth, email, password);
    const user = data.user;

    // Fetch user location
    const location = await getUserLocation();
    if (location) {
      const userRef = doc(db, "users", user.uid);
      await setDoc(
        userRef,
        {
          lastLocation: {
            latitude: location.latitude,
            longitude: location.longitude,
            timestamp: new Date().toISOString(),
          },
        },
        { merge: true }
      );
    }

    router.replace("/home");
    return data;
  } catch (error) {
    console.error("Sign in error:", error);
    Alert.alert("Error", "Failed to sign in. Please check your credentials.");
  }
}

// Register
export async function Register(form) {
  const { email, password, userName, contact } = form;

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    const userRef = doc(db, "users", user.uid);
    await setDoc(userRef, {
      email: email,
      userName: userName,
      userId: user.uid,
      contactNo: contact,
    });
    router.replace("/signIn");
  } catch (error) {
    throw new Error(
      error.message || "Failed to register user. Please try again."
    );
  }
}
