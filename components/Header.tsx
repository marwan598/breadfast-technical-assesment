import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Logo from '../constants/logo';
import Entypo from '@expo/vector-icons/build/Entypo';
import { router } from 'expo-router';

export const Header = () => (
  <View className={`flex-row  justify-center items-center - -ml-9 `}>
    <Logo width={50} height={50} viewBox="0 0 25 50" />
    <Text className="text-primary font-pmedium text-2xl">BreadSocial</Text>
  </View>
);

export const BackButton = () => (
  <TouchableOpacity onPress={() => router.back()}>
    <Entypo name="chevron-left" size={24} color="#aa0082" />
  </TouchableOpacity>
);
