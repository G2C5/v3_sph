<template>
  <div class="type-nav">
    <!-- 商品分类导航 -->
    <div class="container">
      <div @mouseenter="showAll" @mouseleave="hiddenAll">
        <h2 class="all">全部商品分类</h2>
        <transition name="sort">
          <div class="sort" v-show="!isShowAll">
            <div class="all-sort-list2" @click="goSerach($event)">
              <!-- 一级 -->
              <div class="item bo" v-for="(cone, coneIndex) in categoryList" :key="cone.categoryId">
                <h3 @mouseenter="getEnterIndex(coneIndex)" :class="{ cur: coneIndex == categoryIndex }">
                  <a :data-categoryName="cone.categoryName" :data-categoryOneId="cone.categoryId">{{ cone.categoryName
                  }}</a>
                </h3>
                <div class="item-list clearfix" :style="{ display: coneIndex == categoryIndex ? 'block' : 'none' }">
                  <div class="subitem">
                    <!-- 二级 -->
                    <dl class="fore" v-for="(ctwo, ctwoIndex) in cone.categoryChild" :key="ctwo.categoryId">
                      <dt>
                        <a :data-categoryName="ctwo.categoryName" :data-categoryTwoId="ctwo.categoryId">{{
                          ctwo.categoryName }}</a>
                      </dt>
                      <!-- 三级 -->
                      <dd>
                        <em v-for="(cthree, cthreeIndex) in ctwo.categoryChild">
                          <a :data-categoryName="cthree.categoryName" :data-categoryThreeId="cthree.categoryId">{{
                            cthree.categoryName }}</a>
                        </em>

                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue"
import { useRoute, useRouter } from "vue-router";
import searchStore from "@/store/model/search"
import throttle from "lodash/throttle";
const route = useRoute()
const router = useRouter()
const search_store = searchStore();
let isShowAll = ref(true)
let categoryIndex = ref(-1)
let categoryList = computed(() => {
  search_store.categoryList.splice(-2, 2)
  return search_store.categoryList
})

// 鼠标进入全部商品分类
function showAll() {
  if (route.path === '/search') {
    isShowAll.value = false

  }
  console.log(categoryIndex.value)
}
// 鼠标进入离开商品分类
function hiddenAll() {
  if (route.path === '/search') {
    isShowAll.value = true
  }
  categoryIndex.value = -1
}
// 跳转到serach并得到传递的参数（导航栏参数、用户搜索参数）
function goSerach(event) {
  // 根据自定义属性得到a标签，和a标签导航等级
  const element = event.target
  const { categoryname, categoryoneid, categorytwoid, categorythreeid } =
    element.dataset;
  // 传递的参数
  let location = { name: "search" };
  let query = { categoryName: categoryname };
  let params = route.params;
  // 确定a标签 和 三级导航分支传参
  if (categoryname) {
    if (categoryoneid) {
      query.category1Id = categoryoneid;
    } else if (categorytwoid) {
      query.category2Id = categorytwoid;
    } else {
      query.category3Id = categorythreeid;
    }
  }
  location.query = query;
  location.params = params;
  router.push(location);

}
// 获取id
const getEnterIndex = throttle(function (index) {
  categoryIndex.value = index
}, 20)
// 请求三级导航数据
const getContainer = () => {
  search_store.getCategoryList()
}

onMounted(() => {
  if (route.path !== '/search') {
    isShowAll.value = false
  }
  getContainer()
})
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            // display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          // &:hover {
          //   .item-list {
          //     display: block;
          //   }
          // }
          // 添加背景
          .cur {
            background-color: rgb(255, 50, 78);
          }
        }
      }
    }

    .sort-enter-from {
      height: 0px;
    }

    .sort-enter-to {
      height: 461px;
    }

    .sort-enter-active {
      transition: all 2s liner;
      overflow: hidden;
    }
  }
}
</style>
