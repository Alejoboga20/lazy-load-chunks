import { lazy, LazyExoticComponent } from 'react';
import { NoLazy } from '../01-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element;

interface Route {
	path: string;
	Component: LazyExoticComponent<JSXComponent> | JSXComponent;
	name: string;
	children?: Route[];
}

export const routes: Route[] = [
	{
		path: '/lazyload',
		Component: lazy(
			() => import(/* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout')
		),
		name: 'LazyLoadingNested',
	},

	{
		path: '/nolazyload',
		Component: NoLazy,
		name: 'NoLazyLoading',
	},
];
