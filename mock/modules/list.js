import Mock from 'mockjs';

const data = Mock.mock({
  'items|10': [{
    id: '@id',
    categoryName: '@cword(2, 10)',
    code: '@integer(30000, 50000)',
    name: '@cword(2, 20)',
    spec: '@cword(10, 50)',
    'uom|1': ['台', '只', '个', '条', '瓶'],
    price: '@float(1, 100, 0, 2)',
    'status|1': ['published', 'draft', 'deleted']
  }]
});

export default [
  {
    url: '/mock/list',
    type: 'get',
    response: data
  }
];