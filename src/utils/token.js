// 本地存储Token、添加、删除、读取
export const setToken = (token) => {
    localStorage.setItem('TOKEN', token)
}
export const getToken = () => {
    return localStorage.getItem('TOKEN')
}
export const removeToken = (item) => {
    localStorage.removeItem(item)
}
