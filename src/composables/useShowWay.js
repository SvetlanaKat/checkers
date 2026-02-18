import { useMainStore } from "@/store";

export function useShowWay(data) {

   const { ways, current } = data;

   const store = useMainStore();

  if (store.currentPlayer !== current.figureType) return;

  const tempArr = [
     [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ];

  ways.forEach(way => {
    tempArr[way.cy] [way.cx] = 1;
  });

  store.$patch({
    tableHighlight: tempArr,
    currentChecker: current
  });
}