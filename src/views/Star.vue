<template>
    <div class="Star">
        <span>Star</span>
        <Card></Card>
        <router-view></router-view>
    </div>
</template>

<script>
import Card from "../components/Card";
export default {
  name: "Star",
  components: { Card }
};
</script>

<style scoped>
.Star {
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
