import { View, Text } from "react-native";
import React from "react";
import Logo from "../constants/logo";
import { SafeAreaView } from "react-native-safe-area-context";

const Header = () => (
  <SafeAreaView
    className=" justify-center items-center bg-[#edffef] "
    mode="margin"
  >
    <View className="flex-row  justify-center items-center -ml-9 ">
      <Logo width={50} height={50} viewBox="0 0 25 50" />
      <Text className="text-primary font-pmedium text-2xl">BreadSocial</Text>
    </View>
  </SafeAreaView>
);

export default Header;
