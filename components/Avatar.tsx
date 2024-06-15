import React from 'react';
import { createAvatar } from '@dicebear/core';
import { micah } from '@dicebear/collection';
import { SvgXml } from 'react-native-svg';

type Props = {
  imageStyle: string;
  userId: string;
};

const Avatar = ({ imageStyle, userId }: Props) => {
  const avatar = createAvatar(micah, {
    randomizeIds: true,
    seed: userId,
    backgroundColor: ['b6e3f4', 'c0aede', 'd1d4f9', 'ffd5dc', 'ffdfbf'],
    radius: 50
  });

  const svg = avatar.toString();

  return <SvgXml xml={svg} className={imageStyle} />;
};

export default Avatar;
