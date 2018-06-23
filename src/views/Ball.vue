<template>
    <div class="Ball">
        <span>Circle</span>
    </div>
</template>

<script>
export default {
  name: "Ball"
};
</script>

<style scoped>
.Ball {
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
