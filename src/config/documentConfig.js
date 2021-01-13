/*
 * @Author: yaoxs
 * @Date: 2021-01-11 15:12:27
 * @LastEditTime: 2021-01-13 17:00:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueComponents\my-components\src\config\documentConfig.js
 */
const TREELIST = [
    {
        id: 1,
        title: 'JavaScript',
        clickIdArray: [1],
        children: [
            {
                id: 1001,
                title: '动画',
                clickIdArray: [1,1001],
                filePath: 'JavaScript/动画.md',
                children: [
                    {
                        id: 1001001,
                        title: 'requestAnimationFrame方法',
                        clickIdArray: [1,1001,1001001],
                    },
                    {
                        id: 1001002,
                        title: 'cancelAnimationFrame方法',
                        clickIdArray: [1,1001,1001002],
                    },
                    {
                        id: 1001003,
                        title: 'requestAnimationFrame节流',
                        clickIdArray: [1,1001,1001003],
                    }
                ]
            },
            {
                id:1002, 
                title: '画布canvas',
                clickIdArray: [1,1002],
                filePath: 'JavaScript/画布canvas.md',
                children: [
                    {
                        id: 8,
                        title: '三级标题',
                        clickIdArray: [1,6,8]
                    }
                ]
            },
            {id:7, title: '二级标题',clickIdArray: [1,7],filePath: '',},
        ]
    }
]

export {
    TREELIST
}