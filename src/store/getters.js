const getters = {
  sidebar: state => state.app.sidebar,
  user: state => state.app.user,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews
}

export default getters
