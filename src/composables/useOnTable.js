import { useMainStore } from "@/store";

export function useOnTable(way) {

  const store = useMainStore();

  const { cx, cy } = way;

  return cx >= 0 && cx < 8 && cy >=0 && cy < 8;
};