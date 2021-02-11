import Mock from 'mockjs';

Mock.mock('/api/get', 'get', {
    data: {
      id: 9,
      name: '苹果',
      price: 2,
      img: '@dataImage(78x78)'
    },
    status: 200,
    message: '获取商品详情成功'
})

Mock.mock('/api/post', 'post', {
    data: {
      id: 9,
      name: 'post',
      price: 2,
      img: '@dataImage(78x78)'
    },
    status: 200,
    message: '获取商品详情成功'
})