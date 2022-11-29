/* eslint-disable default-param-last */
import { useQuery } from 'react-query';
import { useContext, useEffect } from 'react';
import { get } from '../../helper/Api';
import { LoadingContext } from '../../context/Loading';
import { Trade } from '../../@types';

export type Data = {
  data: Trade[];
};

const usePrice = () => {
  const { add, remove } = useContext(LoadingContext);
  const { data, isLoading, ...query } = useQuery<Data>(['price'], () =>
    get(
      ' https://www.lanacion.com.ar/pf/api/v3/content/fetch/dolarSource',
    ).then((response) => response.data),
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
    isLoading,
    ...query,
  };
};

export default usePrice;
