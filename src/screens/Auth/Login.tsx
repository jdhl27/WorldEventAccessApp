import React, {useState} from 'react';
import {
  View,
  Text,
  Alert,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';

import {RootStackParamList} from '../../navigation';
import {login} from '../../api/auth';
import {gradientLight} from '../../theme';
import {styles} from './styles';
import InputLogin from '../../components/Input/InputLogin';
import {validateEmail} from '../../utils/utils';
import ButtonComponent from '../../components/Button/Button';

type AuthScreenProps = NativeStackScreenProps<RootStackParamList, 'Auth'>;

const AuthScreen: React.FC<AuthScreenProps> = ({navigation}) => {
  // Data
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Logic
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateData = () => {
    if (!validateEmail(email) || email === null) {
      setErrorEmail(true);
      return false;
    }

    return true;
  };

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const data = {
        userName: email,
        password,
      };
      const response = await login(data.userName, data.password);
      console.log('Login successful:', response);
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Home'}],
        }),
      );
    } catch (error) {
      console.error('Login failed:', error);
      Alert.alert('Something went wrong', 'Review the data');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        keyboardShouldPersistTaps="handled">
        <LinearGradient colors={gradientLight} style={styles.gradient}>
          <View style={styles.containerLogoWEA}>
            <Image
              source={require('../../assets/images/logo_wea.png')}
              style={styles.logoWEA}
            />
          </View>
          <View style={styles.containerForm}>
            <Text style={styles.textTitle}>Sign in to enjoy</Text>
            <InputLogin
              type="email-address"
              messageError={
                errorEmail && email ? 'This email is incorrect' : null
              }
              placeholder={'Email'}
              onChangeText={text => {
                setEmail(text);
                setErrorEmail(false);
              }}
            />
            <InputLogin
              messageError={
                errorPassword && password ? 'This password is incorrect' : null
              }
              password={true}
              placeholder={'• • • • • • •'}
              onChangeText={text => {
                setPassword(text);
                setErrorPassword(false);
              }}
              onSubmitEditing={() => {
                if (validateData()) {
                  handleLogin();
                }
              }}
            />
            <ButtonComponent
              disabled={isLoading}
              style={styles.buttonLogin}
              text={isLoading ? 'Processing...' : 'Sign In'}
              onPress={() => {
                if (validateData()) {
                  handleLogin();
                }
              }}
            />
          </View>
        </LinearGradient>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AuthScreen;
