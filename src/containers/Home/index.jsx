import React, { Component } from 'react'
// import { connent } from 'react-redux'
import {
  Cells,
  Grids,
  Button,
} from 'react-weui'
// import style from './style.styl'
import Page from '../../components/Page'
import IconButton from './img/1.jpg'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      grids: [{
        icon: <img src={IconButton} role="presentation" />,
        label: '按分类筛选商品',
        href: '#product/1/show'
      }, {
        icon: <img src={IconButton} role="presentation" />,
        label: '按疾病筛选商品',
        href: '#income'
      }, {
        icon: <img src={IconButton} role="presentation" />,
        label: '订单',
        href: '#order'
      }, {
        icon: <img src={IconButton} role="presentation" />,
        label: 'Button',
        href: '#button'
      }, {
        icon: <img src={IconButton} role="presentation" />,
        label: 'Button',
        href: '#button'
      }]
    }
  }
  render() {
    return (
      <Page className="home">
        <Cells className="mt0">
          <div className="bg-contain bg-center  bg-no-repeat"
            style={{ backgroundImage: `url(${IconButton})`, height: '120px' }}
          />
        </Cells>
        <Cells>
          <div className="row center" style={{ height: '100px' }}>
            <a href="#income" className="flex1 text-center">
              <span className="h4">0.00</span> <br />
              今日收入
            </a>
            <a href="#income" className="flex1 text-center bl1">
              <span className="h4">0.00</span> <br />
              今日收入
            </a>
          </div>
        </Cells>
        <Grids className="white" data={this.state.grids} style={{ marginTop: '20px' }} />
        <a href="#help" style={{ display: 'block', margin: '100px 80px 0' }}>
          <Button type="primary" plain style={{ borderRadius: '20px' }}>新手必读</Button>
        </a>
      </Page>
    )
  }
}

// function mapStateToProps(state) {
//   const {
//     entites: homeData,
//     pagination: { home: { loading } }
//   } = state
//   return {
//     data: homeData,
//     loading,
//   }
// }
export default Home
