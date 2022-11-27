import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from 'react-query';
import LoadingProvider from './context/Loading';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 20000,
      retry: false,
    },
  },
});

export default function App() {
  const { isLoadingComplete, onLayoutRootView } = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  }
  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <LoadingProvider>
        <QueryClientProvider client={queryClient}>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </QueryClientProvider>
      </LoadingProvider>
    </SafeAreaProvider>
  );
}
