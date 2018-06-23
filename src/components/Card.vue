<template>
    <router-link to="/card">
        <div class="Card">Card</div>
    </router-link>
</template>

<script>
export default {
  name: "Card"
};
</script>

<style scoped>
a {
  display: flex;
  flex-direction: row;
  width: 80%;
}
.Card {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: orange;
  color: black;

  height: 130px;
  width: 100%;

  margin: 15px 0;

  border-radius: 10px;
}
</style>
