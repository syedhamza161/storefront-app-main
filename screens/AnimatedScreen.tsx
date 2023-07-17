import React, {useRef} from 'react';
import {
  Animated,
  Text,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
} from 'react-native';

export const AnimatedScreen = () => {
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;
  const translate = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,

      useNativeDriver: true,
    }).start();

    Animated.timing(scale, {
      toValue: 2,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  const translateAnimation = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(translate, {
      toValue: 100,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.fadingContainer,

          {
            // Bind opacity to animated value
            opacity: fadeAnim,
            transform: [{scale}],
            borderRadius: fadeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [100 / 4, 100 / 2],
            }),
          },
        ]}>
        <Text style={styles.fadingText}>Fading View!</Text>
      </Animated.View>
      <View style={styles.buttonRow}>
        <Button title="Fade In View" onPress={fadeIn} />
        <Button title="translate animation" onPress={translateAnimation} />
      </View>
      <Animated.View
        style={[styles.translateBox, {transform: [{translateX: translate}]}]}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: 'powderblue',
    width: 100,
    height: 100,
  },
  fadingText: {
    fontSize: 28,
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: 'space-evenly',
    marginVertical: 16,
  },
  translateBox: {
    width: 100,
    height: 100,
    backgroundColor: 'black',
  },
});
