import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter(); // Initialize router
  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Please fill all fields");
      return;
    }
    try {
      const response = await fetch(
        "https://uddhar-backend.onrender.com/api/v1/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        // console.log(data);
        Alert.alert("Login successful");
        // console.log(data);
        
        router.push("/home"); // Navigate to home page
      } else {
        Alert.alert(data.message || "Login failed");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("An error occurred");
    }
  };
  return (
    <View className="flex-1 bg-white justify-center  ">
      <View className="p-8 m-3  items-center   rounded-md">
        {/* <Text className="text-2xl font-bold text-gray-800 mb-8">Login</Text> */}
        <Image
          source={require("@/assets/images/logo.jpg")}
          className="size-16 mb-4"
          alt=""
        />
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          keyboardType="email-address"
          className="w-full bg-white p-4 mb-4 rounded-md border border-gray-300 shadow-sm"
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry
          className="w-full bg-white p-4 mb-6 rounded-md border border-gray-300 shadow-sm"
        />

        <TouchableOpacity
          onPress={handleLogin}
          className="w-full bg-yellow-500 p-4 rounded-md"
        >
          <Text className="text-center text-white font-semibold">Login</Text>
        </TouchableOpacity>
        <View className="flex flex-row items-center mt-4 gap-1">
          <Text className="text-gray-600">{"Don't have an account?"}</Text>
          <TouchableOpacity>
            <Link
              href={"/register"}
              className="text-yellow-500 text-center underline"
            >
              Register
            </Link>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
