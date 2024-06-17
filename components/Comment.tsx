import { View, Text } from 'react-native';
import React from 'react';
import Avatar from './Avatar';
import Divider from './Divider';

type Props = {
  body: string;
  userId: string;
  userName: string;
};

const Comment = ({ body, userId, userName }: Props) => {
  return (
    <>
      <View className=" w-full my-4  px-4 ">
        {/* Profile Name and avatar */}
        <View className="mb-4 items-center justify-start  flex-row">
          <Avatar
            imageStyle="w-9 h-9 rounded-full mr-4"
            userId={parseInt(userId?.toString() ?? '0', 10).toString()}
          />
          <Text className="text-md font-fbold text-black ">{userName}</Text>
        </View>
        {/* Content */}
        <View className="items-start">
          <Text
            className="text-base text-black text-left font-pregular"
            numberOfLines={2}
          >
            {body?.toString() ?? ''}
          </Text>
        </View>
      </View>
      <View className="w-full items-center">
        <Divider />
      </View>
    </>
  );
};

export default Comment;
