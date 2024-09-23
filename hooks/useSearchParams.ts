import { RouteProp, useRoute } from '@react-navigation/native';

type Params = { category: string };
type SearchParams = Record<string, Params>;

export function useSearchScreenParams(): Partial<Params> {
  const { params } = useRoute<RouteProp<SearchParams>>();

  return {
    category: params?.category,
  };
}
