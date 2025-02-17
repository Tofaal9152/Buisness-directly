import { BusinessData, Exploredata } from "@/constant/DummyData";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Link } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
export default function ExploreScreen() {
  return (
    <View className="flex-1 bg-white p-4">
      {/* Search Bar */}
      <View className="flex flex-row items-center border border-gray-400 rounded-full px-4 py-2 mb-6">
        <Ionicons name="search" size={24} color="gray" />
        <TextInput
          placeholder="Search"
          className="flex-1 ml-3 text-sm"
          style={{ padding: 0 }}
        />
      </View>

      {/* Icons Row */}
      {/* <View className="flex flex-row justify-between mb-6">

        <TouchableOpacity className="items-center">
          <FontAwesome5 name="book" size={24} color="black" />
          <Text className="text-sm">Books</Text>
        </TouchableOpacity>

        <TouchableOpacity className="items-center">
          <MaterialIcons name="style" size={24} color="black" />
          <Text className="text-sm">Fashion</Text>
        </TouchableOpacity>

  
        <TouchableOpacity className="items-center">
          <Entypo name="heart" size={24} color="black" />
          <Text className="text-sm">Favorites</Text>
        </TouchableOpacity>

     
        <TouchableOpacity className="items-center">
          <Ionicons name="notifications-sharp" size={24} color="black" />
          <Text className="text-sm">notifications</Text>
        </TouchableOpacity>
      </View> */}

      {/* FlatList of Images and Items */}
      <Text className="text-xl font-semibold text-gray-800 mb-4">
        Explore Categories
      </Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={BusinessData}
        renderItem={({ item }) => (
          <View className="bg-white rounded-xl shadow-lg p-4 mb-4 border border-gray-200">
            {/* Image */}
            <Image
              source={item.image}
              className=" rounded-xl mb-3 h-40 object-cover w-full"
              resizeMode="cover"
            />

            {/* Title */}
            <Text className="text-lg font-semibold text-gray-800">
              {item.title}
            </Text>

            {/* Location */}
            <View className="flex flex-row items-center mt-2">
              <Ionicons name="location-sharp" size={18} color="#4B5563" />
              <Text className="ml-1 text-gray-600 text-sm">
                {item.location}
              </Text>
            </View>

            {/* Rating */}
            <View className="flex flex-row items-center mt-2">
              <Ionicons name="star" size={18} color="#FACC15" />
              <Text className="ml-1 text-gray-600 text-sm">
                {item.rating}/5
              </Text>
            </View>

            {/* Shopping Button */}

            <Link
              className="mt-4 bg-yellow-500 rounded-md  py-2 text-center"
              href={`/buisness-detail/[details]`}
            >
              <Text className="text-white font-medium">See Details</Text>
            </Link>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
