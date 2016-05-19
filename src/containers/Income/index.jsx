import React, { Component } from 'react'
import {
  Cells,
  Cell,
  CellBody,
  CellFooter,
} from 'react-weui'
import Page from '../../components/Page'

export default class Income extends Component {
  constructor(props) {
    super(props)
    this.state = {
      grids: ''
    }
  }
  render() {
    return (
      <Page className="product-detail">
        <Cells access className="mt0">
          <Cell href="#">
            <CellBody>
              <p className="fs-medium color-midgrey">可提现金额</p>
              <p className="fs-xx-large">1000.00</p>
            </CellBody>
            <CellFooter>提现</CellFooter>
          </Cell>
        </Cells>
        <Cells access>
          <Cell href="#income/ed">
            <CellBody>已结算收入</CellBody>
            <CellFooter />
          </Cell>
          <Cell href="#income/ing">
            <CellBody>未结算收入</CellBody>
            <CellFooter />
          </Cell>
        </Cells>
        <Cells access>
          <Cell href="#balance">
            <CellBody>收支明细</CellBody>
            <CellFooter />
          </Cell>
          <Cell href="#withdrawal-record">
            <CellBody>提现记录</CellBody>
            <CellFooter />
          </Cell>
        </Cells>
      </Page>
    )
  }
}
