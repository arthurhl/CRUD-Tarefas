<template>
  <div class="container-fluid">
    <AddTodo v-on:add-todo="AddTodo" />
    <Todos v-on:delete-todo="DeleteTodo" v-bind:todos="todos" />
  </div>
</template>

<script>
import AddTodo from "./components/AddTodo.vue";
import Todos from "./components/Todos.vue";

export default {
  name: "App",
  components: {
    AddTodo,
    Todos,
  },
  data() {
    return {
      todos: [
        {
          id: "1",
          title: "Tarefa 1",
          completed: false,
        },
      ],
    };
  },
  methods: {
    AddTodo(todo) {
      this.todos = [...this.todos, todo];
    },
    DeleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  },
};
</script>

<style>
</style>
