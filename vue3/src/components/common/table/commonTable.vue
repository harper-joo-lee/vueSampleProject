<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th v-for="item in titles" v-bind:key="item.index" class="text-left">
            {{ item.title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in data"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>

export default {
    props: {
        itemData: Array,
        data:Array
    },
};
</script>
