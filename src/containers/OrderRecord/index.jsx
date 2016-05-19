import React, { Component } from 'react'
import {
  Panel,
  PanelBody,
  PanelFooter,
  MediaBox,
  MediaBoxHeader,
  MediaBoxTitle,
  MediaBoxBody,
  MediaBoxDescription,
  Tab,
  TabBody,
  NavBar,
  NavBarItem,
} from 'react-weui'

export default class OrderRecord extends Component {
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
          >待支付</NavBarItem>
          <NavBarItem
            active={this.state.tab === 2}
            onClick={() => this.setState({ tab: 2 })}
          >待发货</NavBarItem>
          <NavBarItem
            active={this.state.tab === 3}
            onClick={() => this.setState({ tab: 3 })}
          >已发货</NavBarItem>
          <NavBarItem
            active={this.state.tab === 4}
            onClick={() => this.setState({ tab: 4 })}
          >已完成</NavBarItem>
        </NavBar>
        <TabBody>
          <Panel>
            <PanelBody>
              <MediaBox type="appmsg" href="#">
                <MediaBoxHeader>
                  <img src="https://maskzh.com/images/default_avatar.jpg" alt="icon" />
                </MediaBoxHeader>
                <MediaBoxBody>
                  <div className="row center">
                    <div className="flex2">
                      <MediaBoxTitle>感冒灵颗粒</MediaBoxTitle>
                      <MediaBoxDescription>
                        <p className="lh8">王芳</p>
                        分销价：40.00  共 1 件
                      </MediaBoxDescription>
                    </div>
                    <div className="flex1 text-right">
                      <span className="color-info">已发货</span><br />
                      <span className="color-midgrey">利润：10.00</span>
                    </div>
                  </div>
                </MediaBoxBody>
              </MediaBox>
            </PanelBody>
            <PanelFooter>
              <span>12365421455564</span><span className="fr">2015-02-06 12:35</span>
            </PanelFooter>
          </Panel>
          <Panel>
            <PanelBody>
              <MediaBox type="appmsg" href="#">
                <MediaBoxHeader>
                  <img src="https://maskzh.com/images/default_avatar.jpg" alt="icon" />
                </MediaBoxHeader>
                <MediaBoxBody>
                  <div className="row center">
                    <div className="flex2">
                      <MediaBoxTitle>感冒灵颗粒</MediaBoxTitle>
                      <MediaBoxDescription>
                        <p className="lh8">王芳</p>
                        分销价：40.00  共 1 件
                      </MediaBoxDescription>
                    </div>
                    <div className="flex1 text-right">
                      <span className="color-info">已发货</span><br />
                      <span className="color-midgrey">利润：10.00</span>
                    </div>
                  </div>
                </MediaBoxBody>
              </MediaBox>
            </PanelBody>
            <PanelFooter>
              <span>12365421455564</span><span className="fr">2015-02-06 12:35</span>
            </PanelFooter>
          </Panel>
        </TabBody>
      </Tab>
    )
  }
}
