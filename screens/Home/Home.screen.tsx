import { ScrollView, View } from "react-native";
import Header from "./Header";
import SLider from "./Slider";
import Category from "./Category";
import PopularBuisness from "./PopularBuisness";

export default function HomeScreen() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} className="flex-1 bg-white  ">
      <Header />
      <SLider />
      <Category />
      <PopularBuisness />
    </ScrollView>
  );
}
