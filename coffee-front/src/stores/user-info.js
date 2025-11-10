import { defineStore } from "pinia";
import { reactive, watch } from "vue";

export const useUserInfoStore = defineStore("user-info", () => {
  const userInfo = reactive(
    JSON.parse(localStorage.getItem("userInfo") || "{}"),
  );

  if (userInfo.name == undefined || userInfo.name.length == 0)
    userInfo.name = "Иван Иванов";

  if (userInfo.email == undefined || userInfo.email.length == 0)
    userInfo.email = "ivan.ivanov@gmail.com";

  if (userInfo.tel == undefined || userInfo.tel.length == 0)
    userInfo.tel = "+ 7 (909) 909 99 99";

  if (userInfo.password == undefined || userInfo.password.length == 0)
    userInfo.password = "password";

  function setUserInfo(obj) {
    if (obj.name && obj.name.length > 0) userInfo.name = obj.name;

    if (obj.email && obj.email.length > 0) userInfo.email = obj.email;

    if (obj.password && obj.password.length > 0)
      userInfo.password = obj.password;

    if (obj.tel && obj.tel.length > 0) userInfo.tel = obj.tel;
  }

  watch(userInfo, () => {
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  });

  return {
    userInfo,
    setUserInfo,
  };
});
