import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ProductListAnimated} from './screens/ProductListAnimated';

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <ProductListAnimated />
    </QueryClientProvider>
  );
}

export default App;
