import TaskerView from './views/TaskerView';
import CommentsView from './views/CommentsView';
import SwiperView from './views/SwiperView';
import CardsView from './views/CardsView';

export default [
  {
    path: '/comments',
    label: 'Comments',
    exact: true,
    component: CommentsView,
  },
  {
    path: '/swiper',
    label: 'Swiper',
    exact: true,
    component: SwiperView,
  },
  {
    path: '/tasker',
    label: 'Tasker',
    exact: true,
    component: TaskerView,
  },
  {
    path: '/cards',
    label: 'Cards',
    exact: true,
    component: CardsView,
  },
];
