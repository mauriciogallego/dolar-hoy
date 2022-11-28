/* eslint-disable default-param-last */
import { useQuery } from 'react-query';
import { useContext, useEffect } from 'react';
import { get } from '../../helper/Api';
import { LoadingContext } from '../../context/Loading';

const usePrice = () => {
  const { add, remove } = useContext(LoadingContext);
  const { data, refetch, isLoading } = useQuery(['price'], () =>
    get('https://api-dolar-argentina.herokuapp.com/api/dolarblue').then(
      (response) => response.data,
    ),
  );

  useEffect(() => {
    if (isLoading) {
      add('price/dolar');
      return () => remove('price/dolar');
    }
    remove('price/dolar');
    return () => remove('price/dolar');
  }, [isLoading]);

  return {
    data,
    refetch,
  };
};

export default usePrice;
