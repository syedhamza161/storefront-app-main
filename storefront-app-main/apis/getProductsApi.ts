import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',
  'X-Shopify-Storefront-Access-Token': '3970220603f981b1893f8d842de5d606',
};

const END_POINT =
  'https://quick-start-a5887e46.myshopify.com/api/2023-04/graphql.json';

const query = `{
    products(first: 4) {
      edges {
        node {
          createdAt
          title
          description
        }
      }
    }
  }`;

export const getProductsApi = () => {
  return axios({
    url: END_POINT,
    method: 'POST',
    data: {
      query: query,
    },
    headers: headers,
  });
};
