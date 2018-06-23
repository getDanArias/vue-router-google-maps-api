<template>
    <div class="Map">
        <div id="menu-bar">
            <div class="button" v-on:click="goBack">Back</div>
        </div>
        <div class="LocationMap" ref="locationMap"></div>
    </div>
</template>

<script>
export default {
  name: "Location",
  mounted() {
    const locationContainer = this.$refs.locationMap;

    const coordinates = {
      lat: 28.4034863,
      lng: -81.58438289999999
    };
    const locationMap = new window.google.maps.Map(locationContainer, {
      center: coordinates,
      zoom: 15
    });

    new window.google.maps.Marker({
      position: coordinates,
      map: locationMap
    });
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.Map {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background: darkred;
}

.LocationMap {
  width: 100%;
  height: 100%;
}

#menu-bar {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  height: 50px;
  width: 100%;
  background: lightsalmon;
  color: white;
  padding: 0 15px;
  font-size: large;
}
</style>
