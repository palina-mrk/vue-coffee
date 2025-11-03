import { defineStore } from "pinia";
import { reactive, watch } from "vue";

export const useUserInfoStore = defineStore("user-info", () => {
  
  const userInfo = reactive(
    JSON.parse(localStorage.getItem("userInfo") || "{}")
  );

  if(userInfo.name == undefined || userInfo.name.length == 0)
  
  function setUserInfo (obj) {
    Object.keys(obj).forEach(key => userInfo[key] = obj[key])
  }

  watch(userInfo, () => {
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  });

  return {
    userInfo,
    setUserInfo,
  };
});
