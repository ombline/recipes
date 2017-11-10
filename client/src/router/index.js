import Vue from "vue";
import Router from "vue-router";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import RecipeCard from "./RecipeCard";
import CreateNew from "./CreateNew";
import Favs from "./Favs";
import MyRecipes from "./MyRecipes";
import EditRecipe from "./EditRecipe";
import DeleteRecipe from "./DeleteRecipe";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/login",
      component: Login,
      beforeEnter: (to, from, next) => {
        if (router.app.$root.user) next("/");
        else next();
      }
    },
    {
      path: "/signup",
      component: Signup
    },
    {
      path: "/recipes/:id",
      component: RecipeCard
    },
    {
      path: "/new",
      component: CreateNew
    },
    {
      path: "/favs",
      component: Favs
    },
    {
      path: "/myrecipes",
      component: MyRecipes
    },
    {
      path: "/:id/edit",
      component: EditRecipe
    },
    {
      path: "/:id/delete",
      component: DeleteRecipe
    }
  ]
});

export default router;
