import { useMainStore } from "@/store";

export function useMoveCheckerTable(emit, cx, cy, figureType, current) {

  const store = useMainStore();

  emit("moveChecker", current);
}