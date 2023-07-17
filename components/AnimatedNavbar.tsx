import {Animated, StyleSheet, Text} from 'react-native';
import React, {useEffect, useRef} from 'react';

export const AnimatedNavbar = () => {
  const transitionNav = useRef(new Animated.Value(100)).current;
  const opacityZeroToOneNav = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(transitionNav, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),

        Animated.timing(opacityZeroToOneNav, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  });

  return (
    <Animated.View
      style={[
        styles.navbar,
        {
          transform: [{translateX: transitionNav}],
          opacity: opacityZeroToOneNav,
        },
      ]}>
      <Text style={styles.navButtons}>New Arrivals</Text>
      <Text style={styles.navButtons}>Jeans</Text>
      <Text style={styles.navButtons}>Snickers</Text>
      <Text style={styles.navButtons}>Tops</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 400,
  },
  navButtons: {
    marginHorizontal: 10,
    fontSize: 16,
  },
});
