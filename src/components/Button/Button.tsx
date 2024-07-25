import React from 'react';
import {Text, TouchableOpacity, TextStyle, ViewStyle} from 'react-native';
import {styles} from './styles';

interface ButtonComponentProps {
  text: string;
  onPress: () => void;
  style?: ViewStyle;
  styleText?: TextStyle;
  disabled?: boolean;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  text,
  onPress,
  style,
  styleText,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      style={style ? [styles.container, style] : styles.container}
      onPress={onPress}
      disabled={disabled}>
      <Text
        style={
          styleText ? [styles.text(disabled), styleText] : styles.text(disabled)
        }>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
