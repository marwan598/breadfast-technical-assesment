import {
  View,
  Text,
  TouchableOpacity,
  GestureResponderEvent
} from 'react-native';
import React from 'react';
import Avatar from './Avatar';
import { Entypo } from '@expo/vector-icons';

type Props = {
  userName: string;
  userId: number;
  title: string;
  content: string;
  contentNumberOfLines?: number;
  onPress?: (event: GestureResponderEvent) => void;
};

const Card = ({
  userName,
  title,
  content,
  userId,
  contentNumberOfLines,
  onPress
}: Props) => {
  return (
    <>
      {/* Card */}
      <View
        className={`bg-white  w-[43vh] justify-center p-4 mt-3 ${contentNumberOfLines ? 'rounded-2xl shadow-sm shadow-slate-300' : 'rounded-t-2xl'}`}
      >
        {/* Profile Name and avatar */}
        <View className="items-center flex-row">
          <Avatar
            imageStyle="w-12 h-12 rounded-full mr-4"
            userId={userId.toString()}
          />
          <Text className="text-md font-fbold text-black ">{userName}</Text>
        </View>

        {/* Ttitle */}
        <View className="items-start">
          <Text className="text-xl mt-2 text-black  font-fmedium">{title}</Text>
        </View>

        {/* Content */}
        <View className="items-start mb-2">
          <Text
            className="text-base text-black text-left font-pregular"
            numberOfLines={contentNumberOfLines}
          >
            {content}
          </Text>
        </View>

        {onPress ? (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={onPress}
            className="w-full items-center justify-end flex-row"
          >
            <Text className="font-flight text-primary">Show Comments</Text>
            <Entypo name="chevron-right" size={24} color="#aa0082" />
          </TouchableOpacity>
        ) : null}
      </View>
    </>
  );
};

export default Card;
