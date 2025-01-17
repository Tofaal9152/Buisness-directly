import { BusinessData } from "@/constant/DummyData";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link, useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect } from "react";
import { FlatList, Image, Text, View } from "react-native";

export default function BuinessListCategory() {
  const navigation = useNavigation();
  const { category } = useLocalSearchParams();
  useEffect(() => {
    if (category) {
      navigation.setOptions({
        headerShown: true,
        headerTitle: category, // Corrected typo
      });
    }
  }, [category, navigation]);
  return (
    <FlatList
      showsVerticalScrollIndicator={false} 
      data={BusinessData}
      className="mt-3 flex-1"
      renderItem={({ item }) => (
        <View className="px-2">
          <View className="bg-white rounded-xl shadow-lg p-4 mb-4 ">
            {/* Image */}
            <Image
              source={item.image}
              className=" rounded-xl mb-3 w-full"
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
              className="mt-4 bg-violet-500 rounded-md  py-2 text-center"
              href={`/buisness-detail/[details]`}
            >
              <Text className="text-white font-medium">See Details</Text>
            </Link>
          </View>
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}
{
  /* <View className="flex-1 flex items-center justify-center">
      <ActivityIndicator size="large" color="#0000ff" />
    </View> */
}
