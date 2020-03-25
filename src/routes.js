import { lazy } from 'react';

export default [
  {
    path: '/comments',
    label: 'Comments',
    exact: true,
    component: lazy(() =>
      import('./views/CommentsView' /* webpackChunkName: "comments-view" */),
    ),
  },
  {
    path: '/swiper',
    label: 'Swiper',
    exact: true,
    component: lazy(() =>
      import('./views/SwiperView' /* webpackChunkName: "swiper-view" */),
    ),
  },
  {
    path: '/tasker',
    label: 'Tasker',
    exact: true,
    component: lazy(() =>
      import('./views/TaskerView' /* webpackChunkName: "tasker-view" */),
    ),
  },
  {
    path: '/cards',
    label: 'Cards',
    exact: true,
    component: lazy(() =>
      import('./views/CardsView' /* webpackChunkName: "cards-view" */),
    ),
  },
];

// Свой HOC asyncComponent
// export default [
//   {
//     path: '/comments',
//     label: 'Comments',
//     exact: true,
//     component: asyncComponent(() =>
//       import('./views/CommentsView' /* webpackChunkName: "comments-view" */),
//     ),
//   },
//   {
//     path: '/swiper',
//     label: 'Swiper',
//     exact: true,
//     component: asyncComponent(() =>
//       import('./views/SwiperView' /* webpackChunkName: "swiper-view" */),
//     ),
//   },
//   {
//     path: '/tasker',
//     label: 'Tasker',
//     exact: true,
//     component: asyncComponent(() =>
//       import('./views/TaskerView' /* webpackChunkName: "tasker-view" */),
//     ),
//   },
//   {
//     path: '/cards',
//     label: 'Cards',
//     exact: true,
//     component: asyncComponent(() =>
//       import('./views/CardsView' /* webpackChunkName: "cards-view" */),
//     ),
//   },
// ];
