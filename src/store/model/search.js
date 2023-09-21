import { defineStore } from "pinia";
import { ref, getCurrentInstance, reactive } from "vue";


// 组合式写法
const searchStore = defineStore('search', () => {
    const uuid_token = ref('')
    const app = getCurrentInstance()
    const categoryList = ref([])
    const searchList = ref([])
    // 请求三级导航数据
    const getCategoryList = async () => {
        let result = await app.appContext.config.globalProperties.$API.reqGetCategoryList();
        if (result.code == 200) {
            categoryList.value = result.data
            // console.log('result.data', result.data)
        }
    }
    // 请求搜索数据
    const getSearchList = async (params) => {
        let result = await app.appContext.config.globalProperties.$API.reqGetSearchInfo(params)
        if (result.code == 200) {
            searchList.value = result.data
            // console.log('result.data', result.data)
        }
    }

    return {
        uuid_token,
        getCategoryList,
        categoryList,
        getSearchList
    }

})

export default searchStore;