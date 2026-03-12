import { useMainStore } from "@/store";
import { useMoveCalculate } from "@/composables/useMoveCalculate.js";
import { useOnTable } from "@/composables/useOnTable.js";
import { useCanMove } from "@/composables/useCanMove.js";


export function useFindWays(emit, cx, cy, figureType, current) {
  
  const store = useMainStore();

  let ways = [
    {
      position: "topLeft",
      cx: store.cx - 1,
      cy: store.cy - 1
    },
     {
      position: "topRight",
      cx: store.cx + 1,
      cy: store.cy - 1
    },
     {
      position: "bottomLeft",
      cx: store.cx - 1,
      cy: store.cy + 1
    },
     {
      position: "bottomRight",
      cx: store.cx + 1,
      cy: store.cy + 1
    }
  ].filter(item => useOnTable(item));

  ways = useMoveCalculate(ways, figureType, cx, cy). filter(item => useCanMove(item));

 
  
  emit("showWay", { ways, current });

};