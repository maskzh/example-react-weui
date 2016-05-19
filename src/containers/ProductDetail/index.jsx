import React, { Component } from 'react'
import {
  Cells,
  CellsTitle,
  Cell,
  CellBody,
  CellFooter,
  Panel,
  PanelBody,
  MediaBox,
  MediaBoxHeader,
  MediaBoxTitle,
  MediaBoxBody,
  MediaBoxDescription,
  Button,
} from 'react-weui'
import Page from '../../components/Page'

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
        <Page className="pb5">
          <Cells className="mt0">
            <div className="bg-contain bg-center  bg-no-repeat"
              style={{ backgroundImage: 'url(https://maskzh.com/images/default_avatar.jpg)', height: '120px' }}
            />
            <div className="p1">
              <p>清源馆麦青青膳食纤维固体饮料</p>
              <p className="fs-medium color-midgrey">
                分销价：<span className="color-danger">36.00</span>
              </p>
              <p className="fs-medium color-midgrey">
                药店佣金：<span className="color-danger">10.00</span>
                天使佣金：<span className="color-danger">8.00</span>
              </p>
            </div>
          </Cells>
          <Cells>
            <div className="p1">
              <p className="fs-medium color-midgrey lh5">
                所属分类：保健食品
              </p>
              <p className="fs-medium color-midgrey lh5">
                关联疾病：肥胖症
              </p>
              <p className="fs-medium color-midgrey lh5">
                规格：100g*10代
              </p>
              <p className="fs-medium color-midgrey lh5">
                厂商：三九制药有限公司
              </p>
            </div>
          </Cells>
          <Cells access>
            <Cell>
              <CellBody>详细说明书</CellBody>
              <CellFooter />
            </Cell>
          </Cells>
          <CellsTitle>关联商品</CellsTitle>
          <Panel>
            <PanelBody>
              <MediaBox type="appmsg" href="#">
                <MediaBoxHeader>
                  <img src="https://maskzh.com/images/default_avatar.jpg" alt="icon" />
                </MediaBoxHeader>
                <MediaBoxBody>
                  <MediaBoxTitle>爱尔兰春天水果茶</MediaBoxTitle>
                  <MediaBoxDescription>
                    <p className="lh8">100g</p>
                    东方茶业有限公司
                  </MediaBoxDescription>
                </MediaBoxBody>
              </MediaBox>
              <MediaBox type="appmsg" href="#">
                <MediaBoxHeader>
                  <img src="https://maskzh.com/images/default_avatar.jpg" alt="icon" />
                </MediaBoxHeader>
                <MediaBoxBody>
                  <MediaBoxTitle>爱尔兰春天水果茶</MediaBoxTitle>
                  <MediaBoxDescription>
                    <p className="lh8">100g</p>
                    东方茶业有限公司
                  </MediaBoxDescription>
                </MediaBoxBody>
              </MediaBox>
              <MediaBox type="appmsg" href="#">
                <MediaBoxHeader>
                  <img src="https://maskzh.com/images/default_avatar.jpg" alt="icon" />
                </MediaBoxHeader>
                <MediaBoxBody>
                  <MediaBoxTitle>爱尔兰春天水果茶</MediaBoxTitle>
                  <MediaBoxDescription>
                    <p className="lh8">100g</p>
                    东方茶业有限公司
                  </MediaBoxDescription>
                </MediaBoxBody>
              </MediaBox>
            </PanelBody>
          </Panel>
        </Page>
        <div className="ft row center">
          <div className="flex1">
            <Button type="primary" className="not-rounded">推广</Button>
          </div>
          <div className="flex1">
            <Button type="warn" className="not-rounded">待下单</Button>
          </div>
        </div>
      </Page>
    )
  }
}
