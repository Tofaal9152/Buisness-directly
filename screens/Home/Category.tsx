import { CategoryData } from "@/constant/DummyData";
import { Link } from "expo-router";
import { FlatList, Image, Text, View } from "react-native";

const Category = () => {
  return (
    <View className="-4 mt-2">
      {/* Section Title */}
      <View className="flex px-4 flex-row justify-between items-center">
        <Text className="text-xl  font-semibold text-gray-800">Category</Text>
        <Text className="text-medium font-medium text-yellow-500 ">
          View All
        </Text>
      </View>

      {/* Slider */}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={CategoryData}
        contentContainerClassName="mt-3 gap-5 px-2"
        renderItem={({ item }) => (
          <View>
            <Link href={`/buisness-list/${item.name}`}>
              <Image
                source={item.image}
                className="w-[4.5rem] h-[4.5rem] rounded-xl"
                resizeMode="cover"
              />
            </Link>
            <Text className="text-sm font-medium text-gray-800 text-center mt-2">
              {item.name}
            </Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};
export default Category;
