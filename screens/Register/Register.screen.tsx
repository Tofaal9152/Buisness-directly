import { Link } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";

export default function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    Alert.alert("Login", `Email: ${email} Password: ${password} name ${name}`);
  };

  return (
    <View className="flex-1 bg-white justify-center">
      <View className="p-8 m-3  items-center  rounded-md">
        {/* <Text className="text-2xl font-bold text-gray-800 mb-8">Login</Text> */}
        <Image
          source={require("@/assets/images/logo.jpg")}
          className="size-16 mb-4"
          alt=""
        />
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
          keyboardType="default"
          className="w-full bg-white p-4 mb-4 rounded-md border border-gray-300 shadow-sm"
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
          <Text className="text-center text-white font-semibold">Register</Text>
        </TouchableOpacity>
        <View className="flex flex-row items-center mt-4 gap-1">
          <Text className="text-gray-600">{"Already have an account?"}</Text>
          <TouchableOpacity>
            <Link
              href="/login"
              className="text-yellow-500 text-center underline"
            >
              Login
            </Link>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
