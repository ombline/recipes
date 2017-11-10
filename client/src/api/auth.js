import axios from "axios";

function errHandler(err) {
  console.error("API", err);
}

const auth = axios.create({
  baseURL:
    process.env.NODE_ENV === "production" ? "/api" : "http://localhost:3000/api"
});

function saveUserInfo({ token, user }) {
  auth.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
}

export function checkUser(vm) {
  const token = localStorage.getItem("token");
  const userInfo = localStorage.getItem("user");
  if (token && userInfo) {
    const user = JSON.parse(userInfo);
    saveUserInfo({
      token,
      user
    });
    vm.user = user;
  }
}

export function login(username, password, vm) {
  return auth
    .post("/login", {
      username,
      password
    })
    .then(response => {
      saveUserInfo(response.data);
      vm.user = response.data.user;
      return response.data;
    });
}

export function getMyInfo() {
  return auth.get("/secret").then(response => response.data);
}

export function logout(vm) {
  localStorage.removeItem("token");
  vm.user = null;
  delete axios.defaults.headers.common["Authorization"];
}
//hello
export function signup(userInfo) {
  return auth.post("/signup", userInfo).then(response => {
    return response.data;
  });
}

export function getRecipes() {
  let url = "/recipes";
  return auth.get(url).then(response => {
    return response.data;
  });
}
//hello

export function getOneRecipe(id) {
  let url = "/recipes/" + id;
  return auth.get(url).then(response => {
    return response.data;
  });
}

export function like(rID, uID) {
  let url = "/recipes/" + rID + "/like";
  return auth.post(url, { uID }).then(response => {
    return response;
  });
}

export function addRecipe(info) {
  let url = "/recipes/new";
  return auth.post(url, info).then(response => {
    return response;
  });
}

export function seeFavs(userID) {
  let url = "/recipes/test/favs";
  return auth.get(url, userID).then(response => {
    return response.data;
  });
}

export function getMyRecipes(userID) {
  let url = "/recipes/test/myrecipes";
  return auth.get(url, userID).then(response => {
    return response.data;
  });
}

export function editRecipe(info, rID) {
  console.log("API check", info, rID);
  let url = "/recipes/test/" + rID + "/edit";
  console.log("url check", url);

  return auth.patch(url, info).then(response => {
    console.log("i'm on the way back", response);
    return response;
  });
}

export function deleteRecipe(rID) {
  let url = "/recipes/" + rID + "/delete";
  return auth.post(url, rID).then(response => {
    return response;
  });
}
