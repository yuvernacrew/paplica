import HomePage from './pages/home.vue';
import AboutPage from './pages/about.vue';
import SchedulePage from './pages/schedule.vue';
import MemberPage from './pages/member.vue';
import ContactPage from './pages/contact.vue';
import SettingPage from './pages/setting.vue';

export default [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/schedule/',
    component: SchedulePage,
  },
  {
    path: '/member/',
    component: MemberPage,
  },
  {
    path: '/contact/',
    component: ContactPage,
  },
  {
    path: '/setting/',
    component: SettingPage,
  }
];
