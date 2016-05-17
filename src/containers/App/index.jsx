import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { message } from 'antd' // , notification, Button
import Header from '../../components/Header'
// import Nav from '../../components/Nav'
// <Nav {...this.props} />
import Menu from '../../components/Menu'
import { resetErrorMessage } from '../../actions/errorMessage'
import { updateMenu } from '../../actions/menu'
import genMenus from '../../config/menus'
import style from './style.css'

function getMenuByPathname(menus, pathname) {
  let key = ''
  let subkey = ''
  for (let i = 0; i < menus.length; i++) {
    for (let j = 0; j < menus[i].menus.length; j++) {
      let path = menus[i].menus[j].path
      if (path.indexOf('?') !== -1) {
        path = path.slice(0, path.indexOf('?'))
      }
      if (path === pathname) {
        key = menus[i].key
        subkey = menus[i].menus[j].key
      }
    }
  }
  const paths = pathname.match(/[A-Za-z]+/)
  return {
    current: subkey,
    openKeys: [key || paths && paths.length && paths[0]]
  }
}
function reload() {
  location.reload()
}
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menus: genMenus(props.groupId)
    }
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this)
  }
  componentWillMount() {
    this.props.updateMenu(getMenuByPathname(this.state.menus, this.props.pathname))
  }
  componentDidMount() {
    document.addEventListener('visibilitychange', this.handleVisibilityChange)
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.pathname !== this.props.pathname) {
      this.props.updateMenu(getMenuByPathname(this.state.menus, nextProps.pathname))
    }
  }
  componentDidUpdate() {
    // const key = `open${Date.now()}`
    // const btnClick = () => notification.close(key)
    // const btn = (
    //   <Button type="primary" size="small" onClick={btnClick}>去查看</Button>
    // )
    // notification.open({
    //   message: '提醒',
    //   description: '您有新的待开单订单',
    //   btn,
    //   key,
    //   onClose: close
    // })
    const { errorMessage } = this.props
    if (!errorMessage) {
      return
    }
    message.error(errorMessage)
    this.props.resetErrorMessage()
  }
  componentWillUnmount() {
    document.removeEventListener('visibilitychange', this.handleVisibilityChange)
  }

  handleVisibilityChange() {
    if (this.props.oper.id !== JSON.parse(localStorage.user).id) {
      message.warn((<span>
        <span>您在别的标签页或窗口中登录了新的账号，请</span>
        <span className="link" onClick={reload}> 刷新页面 </span>
        <span>来更新当前账户信息</span>
      </span>), 0)
    }
  }
  render() {
    const { children, menu, oper, updateMenu: updateStateMenu } = this.props
    return (
      <div className={style.normal}>
        <Header oper={oper} />
        <div className={style.wrapper}>
          <div className={style.sider}>
            <Menu menu={menu} menus={this.state.menus} updateMenu={updateStateMenu} />
          </div>
          <div className={style.main}>
            <div className={style.content}>
              {children}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

App.propTypes = {
  // Injected by React Redux
  oper: PropTypes.object.isRequired,
  errorMessage: PropTypes.string,
  resetErrorMessage: PropTypes.func.isRequired,
  // Injected by React Router
  children: PropTypes.node
}

function mapStateToProps(state) {
  const {
    errorMessage,
    menu,
    oper,
    routing: { location: { pathname } },
    oper: { groupId }
  } = state
  return {
    errorMessage,
    menu,
    oper,
    pathname,
    groupId
  }
}

export default connect(mapStateToProps, {
  resetErrorMessage,
  updateMenu
})(App)
