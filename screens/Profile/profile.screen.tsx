import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";

const ProfileScreen = () => {
  return (
    <View className="flex-1 bg-white p-4">
      {/* Profile Header */}
      <View className="flex items-center mb-8">
        <Image
          source={{
            uri: "https://www.tofaal.me/_next/image?url=%2FTofaalViva.jpg&w=256&q=75",
          }} // Replace with dynamic image URL
          className="w-32 h-32 rounded-full border-4 border-gray-300 mb-4"
        />
        <Text className="text-2xl font-semibold text-gray-800">John Doe</Text>
        <Text className="text-sm text-gray-500">@johndoe</Text>
      </View>

      {/* User Bio Section */}
      <View className="mb-8">
        <Text className="text-lg font-semibold text-gray-800">About Me</Text>
        <Text className="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris.
        </Text>
      </View>

      {/* Buttons for Additional Actions */}
      <View className="flex flex-row justify-between gap-4 ">
        <TouchableOpacity className="flex-1 p-3 bg-blue-500 rounded-full items-center">
          <Text className="text-white font-semibold">Edit Profile</Text>
        </TouchableOpacity>
        <Link href={"/login"} className="flex-1 text-center p-3 bg-green-500 rounded-full items-center">
          <Text className="text-white font-semibold">Log In</Text>
        </Link>
      </View>
      <View className="flex flex-row justify-between gap-4 mt-2 ">
        <Link href={"/register"} className="flex-1 text-center p-3 bg-violet-500 rounded-full items-center">
          <Text className="text-white font-semibold">Register</Text>
        </Link>
        <TouchableOpacity className="flex-1  p-3 bg-red-500 rounded-full items-center">
          <Text className="text-white font-semibold">Log Out</Text>
        </TouchableOpacity>
      </View>

      {/* Social Media Links Section */}
      <View className="mt-8">
        <Text className="text-lg font-semibold text-gray-800 mb-4">
          Social Media
        </Text>
        <View className="flex-row justify-between">
          {/* Facebook */}
          <TouchableOpacity className="flex items-center">
            <Ionicons name="logo-facebook" size={30} color="#3b5998" />
            <Text className="text-sm text-gray-600 mt-2">Facebook</Text>
          </TouchableOpacity>

          {/* Twitter */}
          <TouchableOpacity className="flex items-center">
            <Ionicons name="logo-twitter" size={30} color="#1DA1F2" />
            <Text className="text-sm text-gray-600 mt-2">Twitter</Text>
          </TouchableOpacity>

          {/* Instagram */}
          <TouchableOpacity className="flex items-center">
            <Ionicons name="logo-instagram" size={30} color="#C13584" />
            <Text className="text-sm text-gray-600 mt-2">Instagram</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
