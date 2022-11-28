/* eslint-disable filenames/match-regex */
import axios from 'axios';
import { Headers, Options } from '../@types/index';

export const instance = axios.create({});

const headers: Headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Cache-Control': 'no-store, no-cache, must-revalidate',
  Pragma: 'no-cache',
};

async function createRequest(url: string, options: Options) {
  const response = await instance.request({
    ...options,
    url,
    data: options.data,
    method: options.method,
    headers: {
      ...headers,
      ...options.headers,
    },
  });
  return response;
}

export const get = async (url: string, options?: Options) => {
  const request = await createRequest(url, {
    ...options,
    method: 'GET',
  });
  return request;
};

export const post = async (url: string, options: Options) => {
  const request = await createRequest(url, {
    ...options,
    method: 'POST',
    data: options.data,
  });
  return request;
};

export const patch = async (url: string, options: Options) => {
  const request = await createRequest(url, {
    ...options,
    method: 'PATCH',
    data: options.data,
  });
  return request;
};

export const del = async (url: string, options: Options) => {
  const request = await createRequest(url, {
    ...options,
    method: 'DELETE',
    data: options.data,
  });
  return request;
};
