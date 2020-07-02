<template>
  <div>
    <h1>Table A</h1>
    <hot-table :data="getData" :colHeaders="colHeaders" :columns="columns" :columnSorting="columnSorting" />
    <hr />
    <h1>table tag</h1>
    <table>
        <tr v-for="data in getData" :key="data.id">
            <td> {{data.a}} </td>
            <td> {{data.b}} </td>
            <td> {{data.c}} </td>
        </tr>
    </table>
    <hr>
    <table-b></table-b>
    
  </div>
</template>

<script>
import { HotTable } from "@handsontable/vue";
import hottable from "./hottable"; //colHeaders, Columns

import TableB from "./TableB";

export default {
  name: "table-a",
  components: {
    HotTable,
    TableB,
  },
  data() {
    return {
      colHeaders: hottable.colHeaders,
      columns: hottable.columns,

      columnSorting: {
        sortEmptyCells: true,
        initialConfig: {
          column: 0,
        //   sortOrder: "asc",
          sortOrder: "desc",
        },
      },
    };
  },
  computed: {
    getData() {
      return this.$store.getters.getData;
    },
  },
};
</script>

<style>
@import "../node_modules/handsontable/dist/handsontable.full.css";
</style>
