<template>
  <div class="checkers-table">
    <div 
    v-for="(row, rowIndex) in table" 
    :key="rowIndex"
    class="checkers-table__row" 
    >

    <TableCell 
    v-for="(cell, cellIndex) in row"
    class="checkers-table__cell"
    :class="{'checkers-table__cell--highlight': tableHighlight[rowIndex][cellIndex] === 1}"
    :key="rowIndex + '-' + cellIndex + cell"
    :data="{ figureType: cell, cx: cellIndex, cy: rowIndex }"
    @showWay="useShowWay"
    @moveChecker="useMoveChecker"
    />

  </div>
  </div>
</template>

<script setup>
import TableCell from "@/components/TableCell.vue";

import { storeToRefs } from "pinia";

import { useMainStore } from "@/store";
// import { useUserStore } from "@/store/user";

import { useShowWay } from "@/composables/useShowWay.js";
// import { useTakeEnemy } from "@/composables/useTakeEnemy.js";

import { useMoveChecker } from "@/composables/useMoveChecker.js";

// const { userBlack, userWhite } = storeToRefs(useUserStore());

const store = useMainStore();

const { table, tableHighlight } = storeToRefs(store);

// function showWay(data) {
//   const { ways, current } = data;

//   if (currentPlayer.value !== current.figureType) return;

//   const tempArr = [
//      [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//   ]

//   ways.forEach(way => {
//     tempArr[way.cy] [way.cx] = 1;
//   });

//   store.$patch({
//     tableHighlight: tempArr,
//     currentChecker: current
//   })
// }

// function moveChecker(current) {
//   const { cx, cy } = current;

//   if (tableHighlight.value[cy][cx] === 1) {

//     useTakeEnemy(current);

//     store.$patch((state) => {
//       state.table[currentChecker.value.cy][currentChecker.value.cx] = 0;
//       state.table[cy][cx] = currentChecker.value.figureType;
//     });
//     store.resetTableHightlight();
//     store.resetCurrentChecker();
//     store.changePlayer();
//   }
// }

// function takeEnemy(cell) {
//   const { cx, cy, figureType } = currentChecker.value;
//   const { cx: ccx, cy: ccy } = cell;

//   let enemy = {};


//   const ways = {
//     topLeft: () => ( cx > ccx && cy > ccy ),
//     topRight: () => ( cx < ccx && cy > ccy ),
//     bottomLeft: () => ( cx > ccx && cy < ccy ),
//     bottomRight: () => ( cx < ccx && cy < ccy ),
//   };

//   const options = {
//     topLeft: () => ({ cx: ccx + 1, cy: ccy + 1 }),
//     topRight: () => ({ cx: ccx - 1, cy: ccy + 1 }),
//     bottomLeft: () => ({ cx: ccx + 1, cy: ccy - 1 }),
//     bottomRight: () => ({ cx: ccx - 1, cy: ccy - 1 }),
//   };

//   Object.entries(ways).forEach(([key, value]) => {

//     if(value()) {
//       enemy = options[key]();

//       return;
//     }
//   })

//   if ( 
//     enemy.cx !== cx && 
//     enemy.cy !== cy && 
//     table.value[enemy.cy][enemy.cx] !== figureType 
//   ) {
//     console.log(figureType);

//     store.$patch((state) => {

//       state.table[enemy.cy][enemy.cx] = 0;
//     });

//     if (figureType === 1) {
//       userWhite.value.increaseScore();
//       } else {
//         userBlack.value.increaseScore();
//     }
//   }
// }

</script>

<style lang="less">
  .checkers-table {
    display: flex;
    flex-direction: column;
    width: 800px;
    height: 800px;
    border: 1px solid @gray;

    &__row {
      display: flex;
      width: 100%;

      &:nth-child(2n) {
        .checkers-table__cell:nth-child(2n + 1) {
          background-color: @brown;
        }
      }

      &:nth-child(2n + 1) {
        .checkers-table__cell:nth-child(2n) {
          background-color: @brown;
        }
      }
    }

    &__cell {
      position: relative;

      &--highlight {
        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: @green;
          opacity: 0.5;
        }
      }
    }
  }
</style>