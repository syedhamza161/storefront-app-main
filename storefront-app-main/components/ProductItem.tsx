import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface ProductItemProps {
  title: string;
}

export const ProductItem: FC<ProductItemProps> = ({title}) => {
  return (
    <View style={styles.itemCard}>
      <Text style={styles.productTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemCard: {
    height: 50,
    padding: 10,
    backgroundColor: 'grey',
    justifyContent: 'center',
    margin: 10,
  },
  productTitle: {
    fontSize: 28,
    color: 'white',
  },
});
