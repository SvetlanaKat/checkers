import { useMainStore } from "@/store";
import { useEditWay } from "@/composables/useEditWay.js";

export function useMoveCalculate(ways, figureType) {
const store = useMainStore();

const availableWays = {
    1: ["topLeft", "topRight"],
    2: ["bottomLeft", "bottomRight"]
  };

  const temp = [];

  ways.forEach((way) => {

    const { cx, cy, position } = way;

    const tableCell = store.table[cy][cx];

    const useCanMove = availableWays[store.figureType].includes(position);

    if (tableCell === 0 && !useCanMove) return;

    if (tableCell === 0 && useCanMove) {
      return temp.push(way);
    }

    if (tableCell !== figureType.value) {
      return temp.push(useEditWay(way))
    }
  });

  return temp;
}