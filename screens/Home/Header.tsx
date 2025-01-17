import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image, Text, TextInput, View } from "react-native";
const Header = () => {
  return (
    <View className="bg-violet-500 p-4 rounded-b-xl">
      <View className="flex flex-row justify-between items-center mb-4">
        {/* Profile Section */}
        <View className="flex flex-row items-center gap-2">
          <View className=" rounded-full w-14 h-14 flex justify-center items-center">
            <Image
              className="w-12 h-12 border-2 border-violet-800 rounded-full"
              source={{
                uri: "https://www.tofaal.me/_next/image?url=%2FTofaalViva.jpg&w=256&q=75",
              }}
            />
          </View>
          <View>
            <Text className="text-white text-sm font-semibold">Welcome</Text>
            <Text className="text-white text-lg font-bold">
              Md Tofaal Ahmed
            </Text>
          </View>
        </View>
        {/* Notification Icon */}
        <Ionicons name="notifications" size={24} color="white" />
      </View>
      {/* Search Bar */}
      <View className="flex flex-row items-center bg-white rounded-md px-3 py-1">
        <AntDesign name="search1" size={20} color="gray" />
        <TextInput
          placeholder="Search here..."
          placeholderTextColor="gray"
          className="ml-2 flex-1 text-base text-black"
        />
      </View>
    </View>
  );
};
export default Header;
