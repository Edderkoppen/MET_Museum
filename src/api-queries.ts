import useSWR from "swr";

import { fetcher } from "./api";
import { ObjectDetailType, ObjectListType } from "./object";

export function useObjectListQuery() {
  return useSWR<ObjectListType>("/objects", fetcher);
}

export function useHighlightQuery() {
  return useSWR<ObjectListType>(
    "/search?isHighlight=true&q=sunflower",
    fetcher
  );
}
export function useDetailQuery(id: string) {
  return useSWR<ObjectDetailType | undefined>("/objects/" + id, fetcher);
}

export function useSearchQuery(terme: string) {
  return useSWR<ObjectListType>("/search" + terme, fetcher);
}
