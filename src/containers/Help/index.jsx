import React, { Component } from 'react'
import {
  Panel,
  PanelBody,
  MediaBox,
  MediaBoxTitle,
  MediaBoxDescription,
} from 'react-weui'

export default class Help extends Component {
  constructor(props) {
    super(props)
    this.state = {
      help: [{
        title: '什么是“未结算收入”？',
        content: '消费者购买了分销商品后，商品对应的佣金将计入“未结算收入”。'
      }, {
        title: '什么是“已结算收入”？',
        content: '消费者的订单状态变为“已完成”状态后的7天无退后情况，该笔订单的“未结算收入”会计入本店的“已结算收入”和“可提现金额，' +
        '已结算收入会持续累加，既为您累计的所有“已结算收入”。'
      }, {
        title: '订单状态何时会变为“已完成”？',
        content: '商品发货后，消费者确认收货，订单状态会变为“已完成”商品发货后，消费者一直未确认收货，7天后，订单状态变为“已完成”'
      }, {
        title: '什么是可提现金额？',
        content: '本店已结算的收入，既可以体现到您自己账户的金额。'
      }, {
        title: '如何提现',
        content: '每个月产生的可提现金额在当月20即可提现。'
      }]
    }
  }
  render() {
    return (
      <Panel className="mt0">
        <PanelBody>
          {this.state.help.map((item) =>
            <MediaBox type="text">
              <MediaBoxTitle>{item.title}</MediaBoxTitle>
              <MediaBoxDescription>{item.content}</MediaBoxDescription>
            </MediaBox>)}
        </PanelBody>
      </Panel>
    )
  }
}
