import useSWR from "swr";

import { fetcher } from "./api";
import { ObjectDetailType, ObjectListType } from "./object";

export function useObjectListQuery() {
  return useSWR<ObjectListType>("/objects?departmentIds=3", fetcher);
}

export function useHighlightQuery() {
  return useSWR<ObjectListType>("/search?isHighlight=true&q=sunflowers", fetcher);
}
export function useDetailQuery(id: number) {
  return useSWR<ObjectDetailType>("/objects/" + id, fetcher);
}

export function useObjectDepartmentQuery() {
  return useSWR<ObjectListType>("/objects?departmentIds=3", fetcher);
}
