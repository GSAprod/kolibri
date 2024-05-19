export function showManageLocalLibraryPage(store) {
  store.commit('manageLocalLibrary/RESET_STATE');
  if (store.getters.canManageContent) {
    return Promise.all([
      store.dispatch('manageLocalLibrary/refreshTaskList'),
      store.dispatch('manageLocalLibrary/refreshChannelList'),
    ]).then(() => store.dispatch('notLoading'));
  }
  store.dispatch('notLoading');
  return Promise.resolve();
}
