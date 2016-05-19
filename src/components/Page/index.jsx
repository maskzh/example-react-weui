import React, { PropTypes } from 'react'

const Page = (props) =>
  <section className={`page ${props.className}`}>{props.children}</section>

Page.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

export default Page
