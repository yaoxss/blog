/*
 * @Author: your name
 * @Date: 2021-01-11 17:07:16
 * @LastEditTime: 2021-01-11 17:30:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueComponents\my-components\src\function\requestFunction.js
 */
var obj = {
    getMd(url){
        return new Promise((resolve) => {
            let xhr = new XMLHttpRequest();
            xhr.open('get', url);
            xhr.send('')
            xhr.onload = function(){
                resolve(xhr.responseText);
            }
        });        
    }
}

export default obj; 