import React, {ReactNode} from 'react';
import {View, StyleProp, ViewStyle} from 'react-native';
import LottieView from 'lottie-react-native';
import {styles} from './styles';

interface LoadingComponentProps {
  loading: boolean;
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

const LoadingComponent: React.FC<LoadingComponentProps> = ({
  loading,
  children,
  style,
}) => {
  if (loading) {
    return (
      <View style={[styles.container, style]}>
        <View>
          <LottieView
            source={require('../../assets/animations/loading_lego.json')}
            style={styles.loading}
            autoPlay
            loop
          />
        </View>
      </View>
    );
  }
  return <>{children}</>;
};

export default LoadingComponent;
