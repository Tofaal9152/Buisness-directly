import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image, Text, TextInput, View } from "react-native";
const Header = () => {
  return (
    <View className="bg-yellow-500 p-4 rounded-b-xl">
      <View className="flex flex-row justify-between items-center mb-4">
        {/* Profile Section */}
        <View className="flex flex-row items-center gap-2">
          <View className=" rounded-full w-14 h-14 flex justify-center items-center">
            <Image
              className="w-12 h-12 border-2 border-white rounded-full"
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV8mkol4ZapnjpzyWUfbq1_HRsiWyLoc3o-g&s",
              }}
            />
          </View>
          <View>
            <Text className="text-white text-sm font-semibold">Welcome</Text>
            <Text className="text-white text-lg font-bold">
              Mizanur Rahman
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
