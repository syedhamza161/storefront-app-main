import React, {FC, useEffect, useRef} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';

interface AnimatedProductItemProps {
  startDelay: number;
}

export const AnimatedProductItem: FC<AnimatedProductItemProps> = ({
  startDelay,
}) => {
  const transitionProductList = useRef(new Animated.Value(10)).current;
  const opacityZeroToOneProductList = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.delay(startDelay),
      Animated.parallel([
        Animated.timing(transitionProductList, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(opacityZeroToOneProductList, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  });

  return (
    <Animated.View
      style={[
        styles.productBox,
        {
          transform: [{translateY: transitionProductList}],
          opacity: opacityZeroToOneProductList,
        },
      ]}>
      <View style={styles.translateBox} />
      <Text>Men's Hoodie</Text>
      <Text>$126</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  translateBox: {
    width: 156,
    height: 156,
    backgroundColor: 'black',
  },
  productBox: {
    marginLeft: 20,
    marginTop: 20,
  },
});
