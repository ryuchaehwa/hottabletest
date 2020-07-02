<template>
  <div>
    <h1>Table A</h1>
    <hot-table ref="hottable" :data="data" :colHeaders="colHeaders" :columns="columns" :columnSorting="columnSorting" :beforeInit="beforeInit" :beforeRender="beforeRender" />
    <h1>table tag</h1>
    <table>
      <tr v-for="data in data" :key="data.id">
        <td>{{ data.a }}</td>
        <td>{{ data.b }}</td>
        <td>{{ data.c }}</td>
      </tr>
    </table>

    <hr />
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
            sortOrder: "asc",
        //   sortOrder: "desc",
        },
      },

      data: []
    };
  },

//   computed: {
//     getData() {
//       return this.$store.getters.getData;
//     },
//   },
  mounted() {
    console.log("mounted");
    let hotTableEl = this.$refs.hottable.hotInstance;
    hotTableEl.loadData(this.$store.getters.getData)
    // console.log(hotTableEl);

    this.data = this.$store.getters.getData

    // let newData = {
    //     a: "whatever"
    // }

    // this.$store.commit('updateData', newData)
  },

  methods: {
      beforeInit() {
          console.log('before init')
      },

      beforeRender() {
          console.log('before render')

      },
  }
};
</script>

<style>
@import "../node_modules/handsontable/dist/handsontable.full.css";
</style>
