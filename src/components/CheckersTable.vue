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
    :key="rowIndex + '-' + cellIndex + cell"
    :data="{ figureType: cell }"
    />

  </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import TableCell from "@/components/TableCell.vue";

import { useMainStore } from "@/store";

const store = useMainStore();

const { table } = storeToRefs(store);
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
  }
</style>