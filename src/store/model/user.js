import { defineStore } from "pinia";
import { ref } from "vue";
import { getUUID } from "@/utils/uuid_token"
import { setToken, getToken, removeToken } from "@/utils/token";

// 组合式写法
let userStore = defineStore('user', () => {
    let uuid_token = ref('')
    let token = ref()
    const getContainer = () => {
        app.appContext.config.globalProperties.$API.reqGetCategoryList()
        console.log('请求三级导航数据')
    }


    uuid_token.value = getUUID()
    token.value = getToken('TOKEN')
    return {
        uuid_token, token, getContainer
    }

})

export default userStore;