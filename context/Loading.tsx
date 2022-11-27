import { createContext, useState, ReactElement } from 'react';

type Context = {
  loading: string[];
  add: (path: string, message?: string) => void;
  remove: (path: string) => void;
};

export const LoadingContext = createContext({} as Context);

export default function LoadingProvider({
  children,
}: {
  children: ReactElement;
}) {
  const [value, setValue] = useState<string[]>([]);

  const addPaths = (path: string) => {
    const exist = value.find((ele) => ele === path);
    if (!exist) {
      setValue([...value, path]);
    }
  };

  const removePaths = (path: string) => {
    if (value.includes(path)) {
      setValue((newValue) => newValue.filter((ele) => ele !== path));
    }
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const providedContext = {
    loading: value,
    add: addPaths,
    remove: removePaths,
  };

  return (
    <LoadingContext.Provider value={providedContext}>
      {children}
    </LoadingContext.Provider>
  );
}
