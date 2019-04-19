import { lazy } from 'react';

export default [
	{
		id: '3',
		title: '实时结构化',
		component: lazy(() => import('../views/index')),
		path: '/index',
		isMenu: true
	},
	{
		id: '4',
		title: '流量统计',
		component: lazy(() => import('../views/flowAnalysis')),
		path: '/flowAnalysis',
		isMenu: true
	},
	process.env.NODE_ENV !== 'production' && {
		id: '5',
		title: '测试页面',
		component: lazy(() => import('../views/test')),
		path: '/test',
		isMenu: true
	}
]