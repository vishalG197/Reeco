import React from 'react'

const OrderListPage = () => {
  return (
    <OrderDiv>
      <div className='order'>
         order
      </div>
      <div className="search">🔍<input type="text" /></div>
      <div className="container">
       your order card goes here
      </div>
    </OrderDiv>
  )
}

export default OrderListPage

const OrderDiv = styled.div `
   
`