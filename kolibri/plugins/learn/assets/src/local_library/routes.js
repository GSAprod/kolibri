import store from 'kolibri.coreVue.vuex.store';
import redirectBrowser from 'kolibri.utils.redirectBrowser';
import LocalLibraryPage from './views/LocalLibrary';

export default [
  {
    path: '/',
    name: 'LOCAL_LIBRARY',
    component: LocalLibraryPage,
    beforeEnter(to, from, next) {
      if (!store.getters.isUserLoggedIn) {
        redirectBrowser();
      } else {
        next();
      }
    },
  },
];
