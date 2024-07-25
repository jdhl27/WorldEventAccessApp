import React from 'react';
import {View, TextInput, Text, TextInputProps, ViewStyle} from 'react-native';
import {styles} from './styles';

interface InputLoginProps {
  onSubmitEditing?: () => void;
  style?: ViewStyle;
  placeholder?: string;
  password?: boolean;
  onChangeText: (text: string) => void;
  messageError?: string | null;
  type?: TextInputProps['keyboardType'];
}

const InputLogin: React.FC<InputLoginProps> = ({
  onSubmitEditing,
  style,
  placeholder,
  password = false,
  onChangeText,
  messageError = null,
  type = 'default',
}) => {
  return (
    <View style={[styles.container, style]}>
      <TextInput
        keyboardType={type}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={'#a1a8a6'}
        onChangeText={onChangeText}
        secureTextEntry={password}
        autoCorrect={!password}
        onSubmitEditing={onSubmitEditing}
      />
      {messageError && <Text style={styles.textError}>{messageError}</Text>}
    </View>
  );
};

export default InputLogin;
