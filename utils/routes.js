import Homepage from '../client/view/Homepage';
import Courses from '../client/view/Courses';
import About from '../client/view/About';
import Contacts from '../client/view/Contacts';
import SingleCourse from '../client/view/SingleCourse';
import Blog from '../client/view/Blog';
import NotFound from '../client/view/NotFound';

import { courses } from '../client/content';
import Stub from '../client/view/Stub';

const singleCourseLinks = courses.map(course => course.link);

// const routes = [
//   {
//     component: Stub,
//     path: '/',
//     exact: true,
//   },
// ];

const routes = [
  {
    ...Homepage,
    path: '/',
    exact: true,
  },
  {
    component: Courses,
    path: '/courses',
    exact: true,
  },
  {
    component: About,
    path: '/about',
    exact: true,
  },
  {
    component: Blog,
    path: '/blog',
    exact: true,
  },
  {
    ...SingleCourse,
    path: '/courses/:name',
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
