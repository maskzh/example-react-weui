import React, { Component } from 'react'
import {
  Cells,
  Cell,
  CellBody,
  CellFooter,
} from 'react-weui'
import Page from '../../components/Page'
import IconButton from './img/1.jpg'

export default class ProductDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      grids: ''
    }
  }
  render() {
    return (
      <Page className="product-detail">
        <Cells className="mt0">
          <div className="bg-contain bg-center  bg-no-repeat"
            style={{ backgroundImage: `url(${IconButton})`, height: '120px' }}
          />
        </Cells>
        <Cells>
          <div style={{ height: '100px' }}></div>
        </Cells>
        <Cells access style={{ fontSize: '14px' }}>
          <Cell>
            <CellBody>详细说明书</CellBody>
            <CellFooter />
          </Cell>
        </Cells>
      </Page>
    )
  }
}
