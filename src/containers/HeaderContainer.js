import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getTotal, getCartProducts } from '../reducers'
import Header from '../components/Header'

const HeaderContainer = ({ products, total }) => (
  <Header
    products={products}
    total={total} />
)

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state)
})

export default connect(
  mapStateToProps,
)(HeaderContainer)
