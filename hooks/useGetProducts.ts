import {useQuery} from '@tanstack/react-query';
import {getProductsApi} from '../apis/getProductsApi';

export const useGetProducts = () => {
  const {data, isLoading} = useQuery({
    queryKey: ['get-products'],
    queryFn: getProductsApi,
  });

  const productsListData = data?.data.data.products.edges;

  return {
    productsListData,
    isLoading,
  };
};
