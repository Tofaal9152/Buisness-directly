import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import Foundation from "@expo/vector-icons/Foundation";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function BusinessDetails() {
  const { details } = useLocalSearchParams();
  const navigator = useNavigation();

  // Sample Reviews Data
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      rating: 5,
      comment: "Great experience! Highly recommended!",
    },
    {
      id: 2,
      name: "Jane Smith",
      rating: 4,
      comment: "Good service, but could be improved in some areas.",
    },
    {
      id: 3,
      name: "Alice Johnson",
      rating: 3,
      comment: "It was okay, but the product could be better.",
    },
  ];

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="flex-1 bg-white"
    >
      <View className="relative">
        {/* Header with Back Button and Favorite Icon */}
        <View className="flex flex-row items-center justify-between absolute top-4 px-4 w-full z-10">
          <TouchableOpacity onPress={()=>navigator.goBack()}>
            <Ionicons
              name="arrow-back-outline"
              size={24}
              color="black"
              className="bg-white rounded-full p-1"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name="hearto" size={24} color="white" />
          </TouchableOpacity>
        </View>
        {/* Business Image */}
        <Image
          className="w-full h-64"
          source={require("@/assets/images/slider1.jpg")}
        />
      </View>

      {/* Business Details */}
      <View className="px-4 rounded-t-2xl relative -top-4 bg-white">
        <Text className="text-2xl mt-3 text-slate-800 font-semibold">
          Modern Clothing center
        </Text>
        <Text className="text-md text-slate-500 font-normal">
          Adi Tangai, Tangail
        </Text>

        <View className="flex flex-row items-center justify-center gap-10 mt-8">
          {/* Location */}
          <View className="flex items-center">
            <View className="bg-blue-500 p-4 rounded-full">
              <Entypo name="location" size={24} color="white" />
            </View>
            <Text className="ml-2 text-gray-600 font-semibold text-sm">
              {"Location"}
            </Text>
          </View>

          {/* Phone Number */}
          <View className="flex items-center">
            <View className="bg-green-500 p-4 rounded-full">
              <Feather name="phone-call" size={24} color="white" />
            </View>
            <Text className="ml-2 text-gray-600 font-semibold text-sm">
              {"Phone number"}
            </Text>
          </View>

          {/* Website */}
          <View className="flex items-center">
            <View className="bg-red-500 w-16 h-16 flex items-center justify-center rounded-full">
              <Foundation name="web" size={26} color="white" />
            </View>
            <Text className="ml-2 text-gray-600 font-semibold text-sm">
              {"Website URL"}
            </Text>
          </View>

          {/* Share */}
          <View className="flex items-center">
            <View className="bg-yellow-500 p-4 rounded-full">
              <AntDesign name="sharealt" size={24} color="white" />
            </View>
            <Text className="ml-2 text-gray-600 font-semibold text-sm">
              Share
            </Text>
          </View>
        </View>
      </View>

      {/* About Section */}
      <View className="p-4">
        <Text className="text-2xl font-semibold mb-4">About</Text>
        <Text className="text-gray-700 text-base leading-relaxed">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non maiores
          sapiente asperiores? Et minima a molestiae modi voluptatum unde saepe
          impedit harum, nemo placeat sapiente, quidem doloremque deserunt
          veniam accusamus! Fugit est laboriosam, imsoluta pariatur inventore
          reprehenderit, alias assumenda neque doloremque libero at repellendus
          maxime exercitationem aperiam.
        </Text>
      </View>

      {/* Reviews Section */}
      <View>
        <Text className="text-xl font-semibold mb-4 px-4">Reviews</Text>
        <TextInput
          multiline={true}
          numberOfLines={4}
          textAlignVertical="top"
          placeholder="Write your comment"
          className="border border-slate-400 h-20 px-3 rounded-md mx-4"
        />

        <TouchableOpacity className="bg-violet-500 p-3 rounded-md mx-4 mt-4 mb-4">
          <Text className="text-white text-center">Submit</Text>
        </TouchableOpacity>
        {reviews.map((review) => (
          <View key={review.id} className="px-4 mb-6">
            <Text className="font-semibold">{review.name}</Text>
            <Text className="text-gray-600 text-sm mb-1">{review.comment}</Text>
            <View className="flex flex-row items-center mb-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <Ionicons
                  key={index}
                  name="star"
                  size={18}
                  color={index < review.rating ? "#FACC15" : "#E5E7EB"}
                />
              ))}
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
