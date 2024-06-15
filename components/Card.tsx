import { View, Text } from 'react-native';
import React from 'react';
import Avatar from './Avatar';

type Props = {
  userName: string;
  userId: number;
  title: string;
  content: string;
};

const Card = ({ userName, title, content, userId }: Props) => {
  return (
    <>
      {/* Card */}
      <View className="bg-[#14232D] rounded-2xl shadow-sm shadow-black w-[43vh]  justify-center py-4 my-2">
        {/* Profile Name and avatar */}
        <View className="mb-4 items-center pl-4 flex-row">
          <Avatar
            imageStyle="w-12 h-12 rounded-full mr-4"
            userId={userId.toString()}
          />
          <Text className="text-md font-fbold text-white ">{userName}</Text>
        </View>

        {/* Ttitle */}
        <View className="mb-2 items-start px-4">
          <Text className="text-xl mt-2 text-white font-fmedium">{title}</Text>
        </View>

        {/* Content */}
        <View className="items-start px-5">
          <Text
            className="text-base text-white text-left font-pregular"
            numberOfLines={2}
          >
            {content}
          </Text>
        </View>
      </View>
    </>
  );
};

export default Card;
