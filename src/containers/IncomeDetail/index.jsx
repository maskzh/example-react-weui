import React, { Component } from 'react'
import {
  Cells,
  Cell,
  CellHeader,
  CellBody,
  Panel,
  PanelBody,
  MediaBox,
  MediaBoxHeader,
  MediaBoxTitle,
  MediaBoxBody,
  MediaBoxDescription,
} from 'react-weui'
import Page from '../../components/Page'

export default class IncomeDetail extends Component {
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
          <Cell>
            <CellHeader>已结算收入</CellHeader>
            <CellBody>
              <p className="ml2">¥ 1000.00</p>
            </CellBody>
          </Cell>
        </Cells>
        <Panel>
          <PanelBody>
            <MediaBox type="appmsg" href="#">
              <MediaBoxHeader>
                <img src="https://maskzh.com/images/default_avatar.jpg" alt="icon" />
              </MediaBoxHeader>
              <MediaBoxBody>
                <div className="row center">
                  <div className="flex3">
                    <MediaBoxTitle>爱尔兰春天水果茶</MediaBoxTitle>
                    <MediaBoxDescription>
                      <p className="lh8">100g</p>
                      分销价：40.00
                    </MediaBoxDescription>
                  </div>
                  <div className="flex1">
                    <span className="color-info">¥ 20.00</span><br />
                    <span className="color-midgrey">已结算</span>
                  </div>
                </div>
              </MediaBoxBody>
            </MediaBox>
          </PanelBody>
        </Panel>
      </Page>
    )
  }
}
