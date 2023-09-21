<template>
  <!-- 头部搜索 -->
  <Container></Container>
  <!-- 属性搜索列表 -->
  <contentListVue></contentListVue>
  <!-- 热卖商品 -->
  <hotsaleVue></hotsaleVue>
</template>

<script setup>
import { reactive, onBeforeMount, onMounted } from 'vue'
import { useRoute } from "vue-router";
import contentListVue from "./contentList.vue";
import hotsaleVue from "./hotsale.vue";
import searchStore from "@/store/model/search"
const route = useRoute()
const search_store = searchStore();

let searchParams = reactive({
  // 一、二、三级导航id
  "category1Id": "",
  "category2Id": "",
  "category3Id": "",
  //一、二、三级导航分类名字
  "categoryName": "",
  //用户输入
  "keyword": "",
  //排序:综合【1】、价格【2】：desc【降序】、asc【升序】
  "order": "1:desc",
  //当前分页
  "pageNo": '1',
  //展示数据数
  "pageSize": '5',
  //售卖属性携带参数
  "props": [],
  //手机品牌
  "trademark": ""
})

onBeforeMount(() => {
  Object.assign(searchParams, route.query, route.params);

})
onMounted(() => {
  search_store.getSearchList(searchParams)
})
</script>

<style></style>
