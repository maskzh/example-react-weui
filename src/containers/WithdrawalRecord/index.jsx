import React, { Component } from 'react'
import {
  Cells
} from 'react-weui'
import Page from '../../components/Page'

export default class WithdrawalRecord extends Component {
  constructor(props) {
    super(props)
    this.state = {
      grids: ''
    }
  }
  render() {
    return (
      <Page className="withdrawal-record">
        <Cells className="mt0">
          <table className="table">
            <thead>
              <tr>
                <th>提现时间</th>
                <th>提现金额</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2016-05-06  12:12:12</td>
                <td>5000.00</td>
              </tr>
              <tr>
                <td>2016-05-06  12:12:12</td>
                <td>5000.00</td>
              </tr>
              <tr>
                <td>2016-05-06  12:12:12</td>
                <td>5000.00</td>
              </tr>
            </tbody>
          </table>
        </Cells>
      </Page>
    )
  }
}
