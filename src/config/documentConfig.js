/*
 * @Author: yaoxs
 * @Date: 2021-01-11 15:12:27
 * @LastEditTime: 2021-01-15 15:18:42
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
                        id: 1002001,
                        title: 'getContext',
                        clickIdArray: [1,1002,1002001]
                    },
                    {
                        id: 1002002,
                        title: 'toDataURL',
                        clickIdArray: [1,1002,1002002]
                    },
                    {
                        id: 1002003,
                        title: 'CanvasRenderingContext2D',
                        clickIdArray: [1,1002,1002003],
                        children: [
                            {
                                id: 1002003001,
                                title: 'fillStyle',
                                clickIdArray: [1,1002,1002003,1002003001]
                            },
                            {
                                id: 1002003002,
                                title: 'strokeStyle',
                                clickIdArray: [1,1002,1002003,1002003002]
                            },
                            {
                                id: 1002003003,
                                title: '矩形相关的方法',
                                clickIdArray: [1,1002,1002003,1002003003]
                            },
                            {
                                id: 1002003004,
                                title: 'fillRect',
                                clickIdArray: [1,1002,1002003,1002003004]
                            },
                            {
                                id: 1002003005,
                                title: 'strokeRect',
                                clickIdArray: [1,1002,1002003,1002003005]
                            },
                            {
                                id: 1002003006,
                                title: 'clearRect',
                                clickIdArray: [1,1002,1002003,1002003006]
                            },
                            {
                                id: 1002003007,
                                title: '绘制路径',
                                clickIdArray: [1,1002,1002003,1002003007]
                            },
                            {
                                id: 1002003008,
                                title: 'beginPath',
                                clickIdArray: [1,1002,1002003,1002003008]
                            },
                            {
                                id: 1002003009,
                                title: 'isPointInStroke',
                                clickIdArray: [1,1002,1002003,1002003009]
                            },
                            {
                                id: 1002003010,
                                title: 'isPointInPath',
                                clickIdArray: [1,1002,1002003,1002003010]
                            },
                            {
                                id: 1002003011,
                                title: 'arc',
                                clickIdArray: [1,1002,1002003,1002003011]
                            },
                            {
                                id: 1002003012,
                                title: 'arcTo',
                                clickIdArray: [1,1002,1002003,1002003012]
                            },
                            {
                                id: 1002003013,
                                title: 'bezierCurveTo',
                                clickIdArray: [1,1002,1002003,1002003013]
                            },
                            {
                                id: 1002003014,
                                title: 'moveTo',
                                clickIdArray: [1,1002,1002003,1002003014]
                            },
                            {
                                id: 1002003015,
                                title: 'lineTo',
                                clickIdArray: [1,1002,1002003,1002003015]
                            },
                            {
                                id: 1002003016,
                                title: 'quadraticCurveTo',
                                clickIdArray: [1,1002,1002003,1002003016]
                            },
                            {
                                id: 1002003017,
                                title: 'rect',
                                clickIdArray: [1,1002,1002003,1002003017]
                            },
                            {
                                id: 1002003018,
                                title: '绘制文本',
                                clickIdArray: [1,1002,1002003,1002003018]
                            },
                            {
                                id: 1002003019,
                                title: 'fillText',
                                clickIdArray: [1,1002,1002003,1002003019]
                            },
                            {
                                id: 1002003020,
                                title: 'strokeText',
                                clickIdArray: [1,1002,1002003,1002003020]
                            },
                            {
                                id: 1002003021,
                                title: 'font',
                                clickIdArray: [1,1002,1002003,1002003021]
                            },
                            {
                                id: 1002003022,
                                title: 'textAlign',
                                clickIdArray: [1,1002,1002003,1002003022]
                            },
                            {
                                id: 1002003023,
                                title: 'textBaseLine',
                                clickIdArray: [1,1002,1002003,1002003023]
                            },
                            {
                                id: 1002003024,
                                title: 'measureText',
                                clickIdArray: [1,1002,1002003,1002003024]
                            },
                            {
                                id: 1002003025,
                                title: '变换',
                                clickIdArray: [1,1002,1002003,1002003025]
                            }
                            
                        ]
                    },
                    
                ]
            },
            {
                id:1003,
                title: 'web组件',
                clickIdArray: [1,1003],
                filePath: 'JavaScript/web组件.md',
                children: [
                    {
                        id: 1003001,
                        title: 'template标签',
                        clickIdArray: [1,1003,1003001]
                    },
                    {
                        id: 1003002,
                        title: 'documentFragment对象',
                        clickIdArray: [1,1003,1003002]
                    },
                    {
                        id: 1003003,
                        title: '影子DOM',
                        clickIdArray: [1,1003,1003003],
                        children: [
                            {
                                id: 1003003001,
                                title: 'attachShadow',
                                clickIdArray: [1,1003,1003003,1003003001]
                            },{
                                id: 1003003002,
                                title: 'slot标签',
                                clickIdArray: [1,1003,1003003,1003003002]
                            },{
                                id: 1003003003,
                                title: ' 事件重定向',
                                clickIdArray: [1,1003,1003003,1003003003]
                            }
                        ]
                    }
                ]
            },
            {
                id:1004,
                title: '全局属性',
                clickIdArray: [1,1004],
                filePath: 'JavaScript/全局属性.md',
                children: [
                    {
                        id: 1004001,
                        title: 'customElements',
                        clickIdArray: [1,1004,1004001]
                    }
                ]
            },
            {
                id:1005,
                title: '对象',
                clickIdArray: [1,1005],
                filePath: 'JavaScript/对象.md',
                children: [
                    {
                        id: 1005001,
                        title: 'CustomElementRegistry',
                        clickIdArray: [1,1005,1005001],
                        children: [
                            {
                                id: 1005001001,
                                title: 'define',
                                clickIdArray: [1,1005,1005001,1005001001],
                            },
                            {
                                id: 1005001002,
                                title: '生命周期',
                                clickIdArray: [1,1005,1005001,1005001002],
                            }
                        ]
                    }
                ]
            },
            {
                id:1006,
                title: 'JSON',
                clickIdArray: [1,1006],
                filePath: 'JavaScript/JSON.md',
                children: [
                    {
                        id: 1006001,
                        title: 'stringify',
                        clickIdArray: [1,1006,1006001]
                    },
                    {
                        id: 1006002,
                        title: 'parse',
                        clickIdArray: [1,1006,1006002]
                    },
                    {
                        id: 1006003,
                        title: 'toJSON',
                        clickIdArray: [1,1006,1006003]
                    }
                ]
            },
            {
                id:1007,
                title: 'AJAX',
                clickIdArray: [1,1007],
                filePath: 'JavaScript/AJAX.md',
                children: [
                    {
                        id: 1007001,
                        title: 'XMLHttpRequest',
                        clickIdArray: [1,1007,1007001],
                        children: [
                            {
                                id: 1007001001,
                                title: 'open',
                                clickIdArray: [1,1007,1007001,1007001001]
                            }
                        ]
                    },
                    {
                        id: 1007002,
                        title: 'test',
                        clickIdArray: [1,1007,1007002]
                    }
                ]
            },
        ]
    },
    {
        id: 2,
        title: 'CSS',
        clickIdArray: [2],
        children: [
            {
                id: 2001,
                title: 'CSS3动画属性',
                clickIdArray: [2,2001],
                filePath: 'CSS/CSS3动画属性.md',
                children: [
                    {
                        id: 2001001,
                        title: 'keyframes动画规则',
                        clickIdArray: [2,2001,2001001]
                    },
                    {
                        id: 2001002,
                        title: 'animation',
                        clickIdArray: [2,2001,2001002]
                    },
                    {
                        id: 2001003,
                        title: 'transition',
                        clickIdArray: [2,2001,2001003]
                    }
                ]
            }
        ]
    }
]

export {
    TREELIST
}