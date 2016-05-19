import React, { Component } from 'react'
import {
  Panel,
  PanelBody,
  MediaBox,
  MediaBoxTitle,
  MediaBoxBody,
  MediaBoxDescription,
  Tab,
  TabBody,
  NavBar,
  NavBarItem,
} from 'react-weui'

export default class IncomeDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tab: 0
    }
  }
  render() {
    return (
      <Tab>
        <NavBar>
          <NavBarItem
            active={this.state.tab === 0}
            onClick={() => this.setState({ tab: 0 })}
          >全部</NavBarItem>
          <NavBarItem
            active={this.state.tab === 1}
            onClick={() => this.setState({ tab: 1 })}
          >订单入账</NavBarItem>
          <NavBarItem
            active={this.state.tab === 2}
            onClick={() => this.setState({ tab: 2 })}
          >提现</NavBarItem>
        </NavBar>
        <TabBody>
          <Panel>
            <PanelBody>
              <MediaBox type="appmsg" href="#">
                <MediaBoxBody>
                  <div className="row center">
                    <div className="flex3">
                      <MediaBoxTitle>微信-张亮</MediaBoxTitle>
                      <MediaBoxDescription>2016-04-08</MediaBoxDescription>
                    </div>
                    <div className="flex1">¥ 20.00</div>
                  </div>
                </MediaBoxBody>
              </MediaBox>
              <MediaBox type="appmsg" href="#">
                <MediaBoxBody>
                  <div className="row center">
                    <div className="flex3">
                      <MediaBoxTitle>微信-张亮</MediaBoxTitle>
                      <MediaBoxDescription>2016-04-08</MediaBoxDescription>
                    </div>
                    <div className="flex1">¥ 20.00</div>
                  </div>
                </MediaBoxBody>
              </MediaBox>
              <MediaBox type="appmsg" href="#">
                <MediaBoxBody>
                  <div className="row center">
                    <div className="flex3">
                      <MediaBoxTitle>微信-张亮</MediaBoxTitle>
                      <MediaBoxDescription>2016-04-08</MediaBoxDescription>
                    </div>
                    <div className="flex1">¥ 20.00</div>
                  </div>
                </MediaBoxBody>
              </MediaBox>
              <MediaBox type="appmsg" href="#">
                <MediaBoxBody>
                  <div className="row center">
                    <div className="flex3">
                      <MediaBoxTitle>微信-张亮</MediaBoxTitle>
                      <MediaBoxDescription>2016-04-08</MediaBoxDescription>
                    </div>
                    <div className="flex1">¥ 20.00</div>
                  </div>
                </MediaBoxBody>
              </MediaBox>
              <MediaBox type="appmsg" href="#">
                <MediaBoxBody>
                  <div className="row center">
                    <div className="flex3">
                      <MediaBoxTitle>微信-张亮</MediaBoxTitle>
                      <MediaBoxDescription>2016-04-08</MediaBoxDescription>
                    </div>
                    <div className="flex1">¥ 20.00</div>
                  </div>
                </MediaBoxBody>
              </MediaBox>
            </PanelBody>
          </Panel>
        </TabBody>
      </Tab>
    )
  }
}
