<template>
  <div class="container-fluid">
    <div v-bind:key="todo.id" v-for="todo in todos">
      <TodoItem
        v-bind:todos="todos"
        v-on:delete-todo="$emit('delete-todo', todo.id)"
        v-bind:todo="todo"
      />
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
export default {
  name: "Todos",
  props: ["todos"],
  components: {
    TodoItem,
  },
};
</script>

<style scoped>
</style>