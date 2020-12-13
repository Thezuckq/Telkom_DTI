import {
  Home,
  // Profile,
  Login,
  ProfileId,
  InfoCorona,
  Product,
} from "../pages";

const routes = [
  {
    path: "/profile/:profileId",
    component: ProfileId,
    isPublic: false,
  },
  {
    path: "/product",
    component: Product,
    isPublic: false,
  },
  {
    path: "/home",
    component: Home,
    isPublic: true,
  },
  {
    path: "/login",
    component: Login,
    isPublic: true,
  },
  {
    path: "/infoCorona",
    component: InfoCorona,
    isPublic: true,
  },
  {
    path: "/",
    component: Home,
    isPublic: true,
  },
];

export default routes;
