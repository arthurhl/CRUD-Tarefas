<template>
  <div class="container-fluid">
    <div class="todo-item" v-bind:class="{ 'is-complete': todo.completed }">
      <p>
        <input
          type="checkbox"
          v-on:change="MarkComplete"
          v-bind:checked="todo.completed"
        />

        {{ todo.title }}
      </p>
      <button @click="Update" class="btn btn-primary">Editar</button>
      <button @click="$emit('delete-todo', todo.id)" class="btn btn-danger">
        Deletar
      </button>
    </div>
    <div v-if="this.flag">
      <form @submit="UpdateTodo">
        <div class="form-group">
          <input
            type="text"
            v-model="UpdateTitle"
            placeholder="Novo título da tarefa"
            required
            class="form-control"
          />
        </div>
        <div class="form-group">
          <button class="btn btn-secondary">Salvar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo", "todos"],
  methods: {
    MarkComplete() {
      this.todo.completed = !this.todo.completed;
    },
    Update() {
      this.flag = !this.flag;
    },
    UpdateTodo(e) {
      e.preventDefault();
      this.todos.filter((todo) => {
        if (todo.id == this.todo.id) {
          todo.title = this.UpdateTitle;
        }
      });

      this.flag = false;
    },
  },
  data() {
    return {
      flag: false,
      UpdateTitle: "",
    };
  },
};
</script>

<style scoped>
</style>