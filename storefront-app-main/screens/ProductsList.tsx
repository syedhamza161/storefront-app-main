import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useGetProducts} from '../hooks/useGetProducts';
import {ProductItem} from '../components/ProductItem';

export const ProductsList = () => {
  const {productsListData} = useGetProducts();

  if (productsListData) {
    console.log('products list', productsListData[0]?.node);
  }

  return (
    <View style={styles.marginTop}>
      <Text>Products list page</Text>

      {productsListData?.map((item: {node: {title: string}}, key: string) => (
        <ProductItem title={item.node.title} key={key} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  marginTop: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
