<template>
    <div class="Square">
        <span>Square</span>
    </div>
</template>

<script>
export default {
  name: "Square"
};
</script>

<style scoped>
.Square {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 100%;

  padding: 15px;

  color: white;
}
</style>
