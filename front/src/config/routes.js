import BasicLayout from '~/layouts/BasicLayout';
import NotFound from '~/pages/NotFound';

const Dashboard = () => import('~/pages/Dashboard');
const OrderReport = () => import('~/pages/OrderReport');
const Chat = () => import('~/pages/Chat')

const routerConfig = [
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/dashboard',
        componentAsync: Dashboard
      },
      {
        path: '/order/report',
        componentAsync: OrderReport
      },
      {
        path: '/chat',
        componentAsync: Chat
      },
      {
        path: '/',
        redirect: '/dashboard'
      },
      {
        path: '*',
        component: NotFound
      }
    ]
  }
];

export default routerConfig;
