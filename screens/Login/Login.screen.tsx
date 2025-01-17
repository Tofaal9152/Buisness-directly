import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import RegisterScreen from "@/screens/Register/Register.screen";
import { Link } from "expo-router";
import { useNavigation } from "@react-navigation/native";
export default function LoginScreen() {
  const navigate = useNavigation()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    navigate.navigate("/")
  };

  return (
    <View className="flex-1 bg-white justify-center  ">
      <View className="p-8 m-3  items-center border border-gray-300 rounded-md">
        {/* <Text className="text-2xl font-bold text-gray-800 mb-8">Login</Text> */}
        <Image
          source={require("@/assets/images/icon.png")}
          className="size-12 mb-4"
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

        <Link href={"/"}
          
          className="w-full bg-[#228B22] p-4 rounded-md"
        >
          <Text className="text-center text-white font-semibold">Login</Text>
        </Link>
        <View className="flex flex-row items-center mt-4 gap-1">
          <Text className="text-gray-600">{"Don't have an account?"}</Text>
          <TouchableOpacity>
            <Link href={"/register"} className="text-[#228B22] text-center underline">
              Register
            </Link>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
