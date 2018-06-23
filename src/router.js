import Vue from "vue";
import Router from "vue-router";
import Star from "./views/Star.vue";
import Circle from "./views/Ball.vue";
import Square from "./views/Square";
import CardDetails from "./components/CardDetails";
import Location from "./views/Location";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "root",
      component: Star
    },
    {
      path: "/star",
      component: Star
    },
    {
      path: "/square",
      name: "square",
      component: Square
    },
    {
      path: "/circle",
      name: "circle",
      component: Circle
    },
    {
      path: "/card",
      name: "card",
      component: CardDetails
    },
    {
      path: "/location",
      name: "location",
      component: Location
    }
  ]
});
