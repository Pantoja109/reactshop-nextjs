import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios(API);
      const filteredProducts = response.data.filter((product) => {
        return product.images.length > 0;
      });
      setProducts(filteredProducts);
    }
    fetchData();
  }, [API]);

  return products;
};

// const useGetProducts = (API) => {
//   const [products, setProducts] = useState([]);
//   const getProducts = async () => {
//     const response = await axios(API);
//     setProducts(response.data);
//   };
//   useEffect(() => {
//     getProducts();
//   }, []);

//   return products;
// };

export default useGetProducts;
