import { SliderData } from "@/constant/DummyData";
import {
    FlatList,
    Image,
    Text,
    View
} from "react-native";
const SLider = () => {
  return (
    <View className=" mt-2">
      {/* Section Title */}
      <Text className="text-xl pl-4 font-semibold text-gray-800 mb-3">
        # Special for you
      </Text>

      {/* Slider */}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={SliderData}
        renderItem={({ item }) => (
          <View className="pl-4">
            <Image
              source={item.image}
              className="w-92 h-44 object-cover rounded-xl"
              resizeMode="cover"
            />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};
export default SLider