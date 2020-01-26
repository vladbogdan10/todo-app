<template>
  <ul>
    <li v-for="task in data" :key="task.id" class="nes-container is-rounded with-title">
      <p v-if="task.status" class="title nes-text" :class="[task.status === 'done' ? 'is-success' : 'is-primary']">{{ task.status }}</p>
      <p>{{ task.name }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    newTaskData: Object
  },

  data() {
    return {
      data: [],
      errors: []
    }
  },

  mounted() {
    this.$http
      .get('http://localhost:8000/todo/list')
      .then(response => (this.data = response.data))
      .catch(e => this.errors.push(e))
  },

  watch: {
    newTaskData() {
      this.data = [this.newTaskData, ...this.data]
    }
  }
}
</script>

<!-- SCOPED STYLES -->
<style lang="scss" scoped>
  ul {
    padding-left: 0;

    li {
      list-style: none;

      &:not(:first-child) {
        margin-top: 1em;
      }
    }
  }

  .nes-container {
    .with-title {
      .title {
        font-size: 12px;
      }
    }
  }
</style>