/*
 * 路由配置
 */
// import auth from '../utils/auth'
// 导入 containers
import App from '../containers/App'
import Home from '../containers/Home'

import Income from '../containers/Income'
import IncomeDetail from '../containers/IncomeDetail'
import ProductDetail from '../containers/ProductDetail'
import BalanceDetail from '../containers/BalanceDetail'
import WithdrawalRecord from '../containers/WithdrawalRecord'
import OrderRecord from '../containers/OrderRecord'
import Help from '../containers/Help'

// function requireAuth(nextState, replace) {
//   if (!auth.loggedIn()) {
//     replace({
//       pathname: '/home',
//       state: { nextPathname: nextState.location.pathname }
//     })
//   }
// }
export default [{
  path: '/',
  component: App,
  // onEnter: requireAuth,
  indexRoute: { onEnter: (nextState, replace) => replace('/home') },
  childRoutes: [
    // 首页
    {
      path: 'home',
      component: Home
    },
    {
      path: 'income',
      component: Income
    },
    {
      path: 'income/:status',
      component: IncomeDetail
    },
    {
      path: 'balance',
      component: BalanceDetail
    },
    {
      path: 'withdrawal-record',
      component: WithdrawalRecord
    },
    {
      path: 'product/:productId/show',
      component: ProductDetail
    },
    {
      path: 'order',
      component: OrderRecord
    },
    {
      path: 'help',
      component: Help
    },
  ]
}]
// <Route path='/404' component={NotFoundView} />
// <Redirect from='*' to='/404' />
