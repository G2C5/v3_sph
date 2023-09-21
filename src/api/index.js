import requests from './axios'
// test
export const reqAnimatioPictures = () => requests({ url: '/imgapi/random.php?return=json', method: 'get' })
// 三级导航数据
export const reqGetCategoryList = () => {
    return requests({ url: '/api/api/product/getBaseCategoryList', method: 'get' });
}
// 搜索
export const reqGetSearchInfo = (params) => {
    return requests({
        url: '/api/api/list',
        method: 'post',
        data: params
    })
}
