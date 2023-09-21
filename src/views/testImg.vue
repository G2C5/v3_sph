<template>
    <div>
        <button v-if="!imgurl" @click="getImage">阿牛</button>
        <router-link class="gobtn" to="home">go-home</router-link>
    </div>
    <img @click="getImage" :src="imgurl" alt="">
</template>
<script setup>
import { ref, getCurrentInstance } from 'vue';
const app = getCurrentInstance();
let imgurl = ref('')
function getImage() {
    app.appContext.config.globalProperties.$API.reqAnimatioPictures().then(res => {
        imgurl.value = res.data.imgurl
    }).catch(error => {
        console.log(error)
    })

}

</script>
<style scoped>
.gobtn {
    padding: 20px;
    background-color: #0ee;
    margin: 0 10px;
    font-size: 18px;
}
</style>
