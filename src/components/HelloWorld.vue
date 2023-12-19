<script setup lang="ts">
// import { ref } from "vue";
import { useCounterStore } from "@/store/counter";
const counterStore = useCounterStore();
import { loginApi } from "@/api/auth";
import { LoginData } from "@/api/auth/types";
// 登录调用
function login(loginData: LoginData) {
  return new Promise<void>((resolve, reject) => {
    loginApi(loginData)
      .then((response) => {
        const { tokenType, accessToken } = response.data;
        token.value = tokenType + "" + accessToken;
        resolve();
      })
      .catch((error) => {
        reject(error);
      });
  });
}
// function login(loginData: LoginData) {
//   cosnt req = {username: '123', password: '456'}
//   loginApi(req).then(res => {
//     console.log(res ,'res')
//   })
// }
</script>

<template>
  <el-card
    class="text-left text-white border-white border-1 border-solid mt-10 bg-[#242424]"
  >
    <template #header> 子组件 HelloWorld.vue</template>
    <el-form>
      <el-form-item label="数字："> {{ counterStore.count }}</el-form-item>
      <el-form-item label="加倍："> {{ counterStore.double }}</el-form-item>
    </el-form>
  </el-card>
</template>

<style scoped lang="scss">
.read-the-docs {
  color: #888;
  background-color: $bg-color;
}
</style>
