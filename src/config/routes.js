/*
 * 路由配置
 */
import auth from '../utils/auth'
// 导入 containers
import Login from '../containers/Login'
import App from '../containers/App'
import Home from '../containers/Home'

// 客户
import Client from '../containers/Client'
import ClientNew from '../containers/Client/New'
import ClientDraft from '../containers/Client/Draft'
import ClientAddress from '../containers/Client/Address'

// 用户
import User from '../containers/User'
import UserNew from '../containers/User/New'
import UserDraft from '../containers/User/Draft'

// 代理商
import Agent from '../containers/Agent'
import AgentNew from '../containers/Agent/New'
import AgentDraft from '../containers/Agent/Draft'

// 供货商
import Supplier from '../containers/Supplier'
import SupplierNew from '../containers/Supplier/New'
import SupplierDraft from '../containers/Supplier/Draft'

// 商品
import Product from '../containers/Product'
import ProductNew from '../containers/Product/New'
import ProductDraft from '../containers/Product/Draft'

// 商品分类
// import ProductCategory from '../containers/Product/Category'
// import ProductCategoryNew from '../containers/Product/CategoryNew'

// 资讯
import News from '../containers/News'
import NewsNew from '../containers/News/New'
import NewsDraft from '../containers/News/Draft'

// 资讯分类
// import NewsCategory from '../containers/News/Category'
// import NewsCategoryNew from '../containers/News/CategoryNew'

// 采购资讯
import BNews from '../containers/BNews'
import BNewsNew from '../containers/BNews/New'
import BNewsDraft from '../containers/BNews/Draft'


// 代理商品
import SaleProduct from '../containers/SaleProduct'
import ChooseProduct from '../containers/ChooseProduct'
import IntentProduct from '../containers/IntentProduct'
// import IntentProductNew from '../containers/IntentProduct/New'

// 推送
import Push from '../containers/Push'
// 修改当前用户的密码
import OwnPassForm from '../containers/User/OwnPassForm'

// 订单
import Order from '../containers/Order'
import AuditOrder from '../containers/Order/Audit'

function requireAuth(nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}
export default [{
  path: '/login',
  component: Login,
  name: 'login'
}, {
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
      breadcrumbName: '控制中心'
    },
    // 修改密码
    {
      path: '/update-pass',
      component: OwnPassForm,
      name: 'updateOwnPass',
      breadcrumbName: '修改密码'
    },

    // 客户
    {
      path: 'client',
      component: Client,
      name: 'client',
      breadcrumbName: '客户管理'
    },
    {
      path: 'client/new',
      component: ClientNew,
      name: 'clientNew',
      breadcrumbName: '新增客户'
    },
    {
      path: 'client/draft',
      component: ClientDraft,
      name: 'clientDraft',
      breadcrumbName: '客户表单草稿箱'
    },
    {
      path: 'client/:clientId/edit',
      component: ClientNew,
      name: 'clientEdit',
      breadcrumbName: '编辑客户'
    },
    {
      path: 'client/:formKey/draft',
      component: ClientNew,
      name: 'clientDNew',
      breadcrumbName: '新增客户'
    },
    {
      path: 'client/:salesmanName',
      component: Client,
      name: 'salesmanclient',
      breadcrumbName: '他的客户'
    },
    {
      path: 'client/:clientId/address',
      component: ClientAddress,
      name: 'clientAddress',
      breadcrumbName: '地址管理'
    },

    // 订单
    {
      path: 'order',
      component: Order,
      name: 'order',
      breadcrumbName: '订单管理'
    },
    {
      path: 'finance/order',
      component: AuditOrder,
      name: 'orderFinace',
      breadcrumbName: '待审核订单'
    },
    {
      path: 'warehouse/order/:status',
      component: AuditOrder,
      name: 'orderWarehouse',
      breadcrumbName: '订单管理'
    },
    {
      path: 'billing/order/:status',
      component: AuditOrder,
      name: 'orderBilling',
      breadcrumbName: '订单管理'
    },
    {
      path: 'order/:name',
      component: Order,
      name: 'hisOrder',
      breadcrumbName: '他的订单'
    },
    // 代理商
    {
      path: 'agent',
      component: Agent,
      name: 'agent',
      breadcrumbName: '代理商管理'
    },
    {
      path: 'agent/new',
      component: AgentNew,
      name: 'agentNew',
      breadcrumbName: '新增代理商'
    },
    {
      path: 'agent/draft',
      component: AgentDraft,
      name: 'agentDraft',
      breadcrumbName: '代理商表单草稿箱'
    },
    {
      path: 'agent/:agentId/edit',
      component: AgentNew,
      name: 'agentEdit',
      breadcrumbName: '编辑代理商'
    },
    {
      path: 'agent/:formKey/draft',
      component: AgentNew,
      name: 'agentDNew',
      breadcrumbName: '新增代理商'
    },

    // 供货商
    {
      path: 'supplier',
      component: Supplier,
      name: 'supplier',
      breadcrumbName: '供货商管理'
    },
    {
      path: 'supplier/new',
      component: SupplierNew,
      name: 'supplierNew',
      breadcrumbName: '新增供货商'
    },
    {
      path: 'supplier/draft',
      component: SupplierDraft,
      name: 'supplierDraft',
      breadcrumbName: '供货商表单草稿箱'
    },
    {
      path: 'supplier/:supplierId/edit',
      component: SupplierNew,
      name: 'supplierEdit',
      breadcrumbName: '编辑供货商'
    },
    {
      path: 'supplier/:formKey/draft',
      component: SupplierNew,
      name: 'supplierDNew',
      breadcrumbName: '新增供货商'
    },

    // 用户
    {
      path: 'user',
      component: User,
      name: 'user',
      breadcrumbName: '用户管理'
    },
    {
      path: 'user/new',
      component: UserNew,
      name: 'userNew',
      breadcrumbName: '新增用户'
    },
    {
      path: 'user/draft',
      component: UserDraft,
      name: 'userDraft',
      breadcrumbName: '用户表单草稿箱'
    },
    {
      path: 'user/:userId/edit',
      component: UserNew,
      name: 'userEdit',
      breadcrumbName: '编辑用户'
    },
    {
      path: 'user/:formKey/draft',
      component: UserNew,
      name: 'userDNew',
      breadcrumbName: '新增用户'
    },
    {
      path: 'user/:name',
      component: User,
      name: 'hisSalesmans',
      breadcrumbName: '所属业务员'
    },

    // 业务员
    {
      path: 'salesman',
      component: User,
      name: 'salesman',
      breadcrumbName: '业务员管理'
    },

    // 商品
    {
      path: 'product',
      component: Product,
      name: 'product',
      breadcrumbName: '商品管理'
    },
    {
      path: 'product/new',
      component: ProductNew,
      name: 'productNew',
      breadcrumbName: '新增商品'
    },
    {
      path: 'product/draft',
      component: ProductDraft,
      name: 'productDraft',
      breadcrumbName: '商品表单草稿箱'
    },
    {
      path: 'product/:productId/edit',
      component: ProductNew,
      name: 'productEdit',
      breadcrumbName: '编辑商品'
    },
    {
      path: 'product/:formKey/draft',
      component: ProductNew,
      name: 'productDNew',
      breadcrumbName: '新增商品'
    },
    {
      path: 'product/:intentProductId/intent',
      component: ProductNew,
      name: 'productDNew',
      breadcrumbName: '新增商品'
    },
    {
      path: 'product/:copyProductId/copy',
      component: ProductNew,
      name: 'productDNew',
      breadcrumbName: '复制商品'
    },
    // 发布商品
    {
      path: 'intent-product',
      component: IntentProduct,
      name: 'intentProduct',
      breadcrumbName: '发布商品'
    },
    // {
    //   path: 'intent-product/new',
    //   component: IntentProductNew,
    //   name: 'intentProductNew',
    //   breadcrumbName: '新增发布商品'
    // },
    // {
    //   path: 'intent-product/:intentProductId/edit',
    //   component: IntentProductNew,
    //   name: 'intentProductEdit',
    //   breadcrumbName: '编辑发布商品'
    // },
    // {
    //   path: 'product-category',
    //   component: ProductCategory,
    //   name: 'productCategory',
    //   breadcrumbName: '商品分类管理'
    // },
    // {
    //   path: 'product-category/new',
    //   component: ProductCategoryNew,
    //   name: 'productCategoryNew',
    //   breadcrumbName: '新增商品分类'
    // },
    // {
    //   path: 'product-category/:productCategoryId/edit',
    //   component: ProductCategoryNew,
    //   name: 'productCategoryEdit',
    //   breadcrumbName: '编辑商品分类'
    // },

    // 资讯
    {
      path: 'news',
      component: News,
      name: 'news',
      breadcrumbName: '资讯管理'
    },
    {
      path: 'news/new',
      component: NewsNew,
      name: 'newsNew',
      breadcrumbName: '新增资讯'
    },
    {
      path: 'news/draft',
      component: NewsDraft,
      name: 'newsDraft',
      breadcrumbName: '资讯表单草稿箱'
    },
    {
      path: 'news/:newsId/edit',
      component: NewsNew,
      name: 'newsEdit',
      breadcrumbName: '编辑资讯'
    },
    {
      path: 'news/:formKey/draft',
      component: NewsNew,
      name: 'newsDNew',
      breadcrumbName: '新增资讯'
    },
    // {
    //   path: 'news-category',
    //   component: NewsCategory,
    //   name: 'newsCategory',
    //   breadcrumbName: '资讯分类管理'
    // },
    // {
    //   path: 'news-category/new',
    //   component: NewsCategoryNew,
    //   name: 'newsCategoryNew',
    //   breadcrumbName: '新增资讯分类'
    // },
    // {
    //   path: 'news-category/:newsCategoryId/edit',
    //   component: NewsCategoryNew,
    //   name: 'newsCategoryEdit',
    //   breadcrumbName: '编辑资讯分类'
    // }
    // 采购资讯
    {
      path: 'bnews',
      component: BNews,
      name: 'bnews',
      breadcrumbName: '资讯管理'
    },
    {
      path: 'bnews/new',
      component: BNewsNew,
      name: 'bnewsNew',
      breadcrumbName: '新增资讯'
    },
    {
      path: 'bnews/draft',
      component: BNewsDraft,
      name: 'bnewsDraft',
      breadcrumbName: '资讯表单草稿箱'
    },
    {
      path: 'bnews/:bnewsId/edit',
      component: BNewsNew,
      name: 'bnewsEdit',
      breadcrumbName: '编辑资讯'
    },
    {
      path: 'bnews/:formKey/draft',
      component: BNewsNew,
      name: 'bnewsDNew',
      breadcrumbName: '新增资讯'
    },
    // 代理商品
    {
      path: 'sale-product',
      component: SaleProduct,
      name: 'saleProduct',
      breadcrumbName: '代理商品管理'
    },
    // 可代理商品
    {
      path: 'choose-product',
      component: ChooseProduct,
      name: 'chooseProduct',
      breadcrumbName: '可代理商品'
    },
    {
      path: 'push/product/:productId',
      component: Push,
      name: 'push',
      breadcrumbName: '推送商品'
    },
    {
      path: 'push/bnews/:bnewsId',
      component: Push,
      name: 'push',
      breadcrumbName: '推送资讯'
    }
  ]
}]
// <Route path='/404' component={NotFoundView} />
// <Redirect from='*' to='/404' />
