import React, { Component } from 'react'
import {
  Cells,
  Grids,
} from 'react-weui'
import Page from '../../components/Page'
import IconButton from './img/1.jpg'

export default class Home extends Component {
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
        href: '#button'
      }, {
        icon: <img src={IconButton} role="presentation" />,
        label: 'Button',
        href: '#button'
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
          <div style={{ height: '100px' }}></div>
        </Cells>
        <Grids className="white" data={this.state.grids} style={{ marginTop: '20px' }} />
      </Page>
    )
  }
}
