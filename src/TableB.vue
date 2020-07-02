<template>
  <div>
    <h1>Table B</h1>
    <input type="text" v-model="input" @keypress.enter="save" />
    <table>
      <tr v-for="(data, index) in getData" :key="index">
        <td>
          {{ data.a }}
        </td>
        <td>
          {{ data.b }}
        </td>
        <td>
          {{ data.c }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "table-b",
  data() {
    return {
      input: "",
    };
  },
  computed: {
    getData() {
      return this.$store.getters.getData;
    },
  },
  methods: {
    save() {
      let newData = {
        a: this.input,
      };

      this.$store.commit("updateData", newData);
    },
  },
  mounted() {
      let newData = {
          a: 'test'
      }

      this.$store.commit("updateData", newData)
  }
};
</script>

<style></style>
