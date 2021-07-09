<template>
  <div class="container-fluid">
    <div>
      <br /><br />
      <h1 class="text-center">CRUD de Tarefas</h1>
      <br /><br />

      <form @submit="AddTodo">
        <div class="form-group">
          <input
            type="text"
            v-model="title"
            placeholder="Escreva sua tarefa"
            required
            class="form-control"
          />
        </div>

        <div class="form-group">
          <button class="btn btn-success">Adicionar Tarefa</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddTodo",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    AddTodo(e) {
      e.preventDefault();

      const NewTodo = {
        id: Date.now(),
        title: this.title,
        completed: false,
      };

      this.$emit("add-todo", NewTodo);
      this.title = "";
    },
  },
};
</script>

<style scoped>
</style>