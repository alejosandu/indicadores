const navConfig = [
  {
    name: 'Chat',
    path: '/chat',
    icon: 'message'
  },
  {
    name: 'FAQS',
    path: 'https://github.com/react-hobby/riant',
    external: true,
    icon: 'question-circle'
  },
  {
    name: 'Usuario',
    path: '/user/login',
    icon: 'user'
  }
];

const asideConfig = [
  {
    name: 'Inicio',
    path: '/dashboard',
    icon: 'home'
  },
  {
    name: 'Gráficas',
    path: '/order/report',
    icon: 'bar-chart'
  },
  {
    name: 'Carro de compra',
    path: '/order/list',
    icon: 'shopping-cart'
  },
  {
    name: 'Devoluciones',
    path: '/chargeback',
    icon: 'ordered-list'
  },
  {
    name: 'Despacho',
    path: '/dispatch',
    icon: 'clock-circle'
  },
  {
    name: 'Crear bienes',
    path: '/add/goods',
    icon: 'form'
  },
  {
    name: 'Crear orden',
    path: '/add/order',
    icon: 'edit'
  }
];

export { navConfig, asideConfig };
