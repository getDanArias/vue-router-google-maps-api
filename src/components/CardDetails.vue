<template>
    <div class="CardDetails">
        <div>Details</div>
        <router-link to="/location">
            <div class="MapButton">Map</div>
        </router-link>
    </div>

</template>

<script>
export default {
  name: "CardDetails"
};
</script>

<style scoped>
.CardDetails {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: lightseagreen;
  color: black;

  height: 80%;
  width: 80%;
  border-radius: 10px;
  padding: 10px;
}

.MapButton {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  text-align: center;
  background: yellow;
  color: black;
  font-size: 30px;
  min-height: 50px;
  min-width: 100px;

  margin: 25px;
  border-radius: 10px;
}
</style>
