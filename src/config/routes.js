/*
 * 路由配置
 */
import auth from '../utils/auth'
// 导入 containers
import App from '../containers/App'
import Home from '../containers/Home'

function requireAuth(nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/home',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}
export default [{
  path: '/',
  component: App,
  name: 'home',
  breadcrumbName: '首页',
  onEnter: requireAuth,
  indexRoute: { onEnter: (nextState, replace) => replace('/home') },
  childRoutes: [
    // 首页
    {
      path: '/home',
      component: Home,
      name: 'Home',
      breadcrumbName: '首页'
    },
  ]
}]
// <Route path='/404' component={NotFoundView} />
// <Redirect from='*' to='/404' />
