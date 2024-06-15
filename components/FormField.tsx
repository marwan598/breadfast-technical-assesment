import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    KeyboardTypeOptions
} from 'react-native';
import React, { useState } from 'react';
import { icons } from '../constants';
type Props = {
    title: string;
    value: string;
    handleChangeText: (e: string) => void;
    otherStyles: string;
    keyboardType?: KeyboardTypeOptions;
    placeholder?: string;
};

const FormField = ({
    handleChangeText,
    keyboardType,
    otherStyles,
    placeholder,
    title,
    value
}: Props) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <Text className="text-base text-gray-100 font-pmedium">
                {title}
            </Text>
            <View className="border-2 border-black-200 w-full h-16 px-4 bg-black-100  rounded-2xl focus:border-secondary items-center flex-row">
                <TextInput
                    className=" flex-1 text-white font-psemibold text-base "
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor="#7b7b8b"
                    onChange={(e) => handleChangeText(e.nativeEvent.text)}
                    secureTextEntry={title === 'Password' && !showPassword}
                    keyboardType={keyboardType}
                />

                {title === 'Password' && (
                    <TouchableOpacity
                        onPress={() => setShowPassword(!showPassword)}
                    >
                        <Image
                            source={!showPassword ? icons.eye : icons.eyeHide}
                            className="w-6 h-6"
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default FormField;
