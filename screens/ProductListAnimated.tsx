import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AnimatedNavbar} from '../components/AnimatedNavbar';
import {AnimatedProductItem} from '../components/AnimatedProductItem';

export const ProductListAnimated = () => {
  return (
    <>
      <AnimatedNavbar />

      <View style={styles.productsScroll}>
        <AnimatedProductItem startDelay={1000} />
        <AnimatedProductItem startDelay={1200} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productsScroll: {
    display: 'flex',
    flexDirection: 'row',
  },
});
