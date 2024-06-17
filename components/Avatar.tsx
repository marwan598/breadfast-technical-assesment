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
    radius: 50,
    mouth: ['smile', 'laughing', 'smirk'],
    baseColor: ['f9c9b6'],
    glassesProbability: 50,
    hairColor: ['000000', '6bd9e9', '9287ff'],
    backgroundType: ['gradientLinear', 'solid']
  });

  const svg = avatar.toString();

  return <SvgXml xml={svg} className={imageStyle} />;
};

export default Avatar;
