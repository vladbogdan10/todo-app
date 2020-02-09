<template>
  <div class="nes-container is-rounded with-title">
    <span v-if="task.done" class="title nes-text is-success">Done</span>
    <span v-if="task.inProgress" class="title nes-text is-primary">Progress</span>
    <p :class="{done: task.done}">{{ task.name }}</p>
  </div>
</template>

<script>
export default {
  name: "Task",

  props: {
    task: Object,
    index: Number
  }
}
</script>

<!-- SCOPED STYLES -->
<style lang="scss" scoped>
  .nes-container {
    flex-basis: 100%;

    .with-title {
      .title {
        font-size: 12px;
      }
    }
  }

  .done {
    text-decoration: line-through;
    color:darkgrey
  }
</style>