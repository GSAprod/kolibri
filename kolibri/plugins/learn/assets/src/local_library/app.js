import KolibriApp from 'kolibri_app';
import routes from './routes';
import pluginModule from './modules/pluginModule';

class LocalLibraryModule extends KolibriApp {
  get routes() {
    return routes;
  }
  get pluginModule() {
    return pluginModule;
  }
  ready() {
    super.ready();
  }
}

export default new LocalLibraryModule();
