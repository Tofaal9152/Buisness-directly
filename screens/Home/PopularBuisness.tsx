import { BusinessData } from "@/constant/DummyData";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
const PopularBuisness = () => {
  return (
    <View className="mt-4">
      {/* Section Title */}
      <View className="flex px-4 flex-row justify-between items-center">
        <Text className="text-xl  font-semibold text-gray-800">
          Popular Buisness
        </Text>
        <Text className="text-medium font-medium text-violet-500 ">
          View All
        </Text>
      </View>

      {/* Slider */}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={BusinessData}
        className="mt-3"
        renderItem={({ item }) => (
          <View className="px-2">
            <View className="bg-white rounded-xl shadow-lg p-4 mb-4 border border-gray-200">
              {/* Image */}
              <Image
                source={item.image}
                className=" rounded-xl mb-3 h-40 w-80"
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
    </View>
  );
};

export default PopularBuisness;
