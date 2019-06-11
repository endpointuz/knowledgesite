import Homepage from '../client/view/Homepage';
import Courses from '../client/view/Courses';
import Contacts from '../client/view/Contacts';
import JsBegginer from '../client/view/JsBegginer';
import NotFound from '../client/view/NotFound';


const routes = [
  {
    component: Homepage,
    path: '/',
    exact: true,
  },
  {
    component: Courses,
    path: '/courses',
    exact: true,
  },
  {
    component: JsBegginer,
    path: '/courses/js-begginer',
    exact: true,
  },
  {
    component: Contacts,
    path: '/contacts',
    exact: true,
  },
  {
    component: NotFound,
    path: '/',
    exact: false,
  },
];

export default routes;
