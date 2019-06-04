import Homepage from '../client/view/Homepage.jsx';
import AboutUs from '../client/view/AboutUs.jsx';
import NotFound from '../client/view/NotFound.jsx';


const routes = [
  {
    ...Homepage,
    path: '/',
    exact: true,
  },
  {
    component: AboutUs,
    path: '/about',
    exact: true,
  },
  {
    component: NotFound,
    path: '/',
    exact: false,
  },
];

export default routes;
