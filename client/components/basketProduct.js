import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromBasket } from '../redux/reducers/basket'

const BasketProduct = ({ item }) => {
  const dispatch = useDispatch()
  const currency = useSelector((store) => store.products.currency)
  const currentRate = useSelector((store) => store.products.rates)
  const product = useSelector((s) => s.products.goods?.[item.id])
  return (
    <div className="flex flex-row space-x-4">
      <img className="product__image h-8 w-8" src={product.image} alt={product.title} />
      <div className="product__title">{product.title}</div>
      <div className="product__price">{(product.price * currentRate[currency]).toFixed(2)}</div>
      <div className="product__amount">{item.amount}</div>
      <button className="product__remove p-2 border" type="button" onClick={() => dispatch(removeFromBasket(item.id))}> - </button>
    </div>
  )
}

BasketProduct.propTypes = {}

export default React.memo(BasketProduct)
