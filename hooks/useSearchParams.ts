import { RouteProp, useRoute } from '@react-navigation/native';

type Params = { category?: string; favorites: boolean; searchterm: string };
type SearchParams = Record<
  string,
  {
    category: string;
    favorites: string;
    searchterm: string;
  }
>;

export function useSearchScreenParams(): Params {
  const { params } = useRoute<RouteProp<SearchParams>>();

  return {
    category: params?.category ?? undefined,
    favorites: +params?.favorites === 1,
    searchterm: params?.searchterm ?? '',
  };
}
