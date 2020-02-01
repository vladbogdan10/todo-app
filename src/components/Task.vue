<template>
  <ul>
    <li v-for="task in data" :key="task.id" class="nes-container is-rounded with-title">
      <span v-if="task.done" class="title nes-text is-success">Done</span>
      <span v-if="task.inProgress" class="title nes-text is-primary">Progress</span>
      <p>{{ task.name }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    data: Array
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