import { useMainStore } from "@/store";
import { useTakeEnemy } from "@/composables/useTakeEnemy.js";

export function useMoveChecker(current) {
  const { cx, cy } = current;

  const store = useMainStore();

  if (store.tableHighlight[cy][cx] === 1) {

    useTakeEnemy(current);

    store.$patch((state) => {
      state.table[store.currentChecker.cy][store.currentChecker.cx] = 0;
      state.table[cy][cx] = store.currentChecker.figureType;
    });
    store.resetTableHightlight();
    store.resetCurrentChecker();
    store.changePlayer();
  }
}