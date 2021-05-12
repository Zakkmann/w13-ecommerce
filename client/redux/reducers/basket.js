const initialState = {
  basketProducts: {
    // 'someId': 0
  }
}
// 'store/products/GET_PRODUCTS'
const CHANGE_PRODUCTS = 'store/basket/CHANGE_PRODUCTS'
// const REMOVE_PRODUCTS = 'store/basket/REMOVE_PRODUCTS'

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PRODUCTS: {
      return {
        ...state,
        basketProducts: action.changeGoods
      }
    }
    default:
      return state
  }
}

export function addToBasket(itemId) {
  return (dispatch, getState) => {
    const store = getState()
    const basket = store.basket.basketProducts
    const newItemInBasket = typeof basket?.[itemId] === 'undefined'
      ? { ...basket, [itemId]: 1 }
      : { ...basket, [itemId]: basket[itemId] + 1 }
    dispatch({ type: CHANGE_PRODUCTS, changeGoods: newItemInBasket })
  }
}

export function removeFromBasket(itemId) {
  return (dispatch, getState) => {
    const store = getState()
    const basket = store.basket.basketProducts
    const updatedBasket = basket[itemId] <= 1
    ? { ...basket, [itemId]: undefined }
    : { ...basket, [itemId]: basket[itemId] - 1 }
    dispatch({ type: CHANGE_PRODUCTS, changeGoods: updatedBasket })
  }
}

/*

export function changeBasketMap(itemId, sign) {
  return (dispatch, getState) => {
    const store = getState()
    let basket = store.basket.basketProducts
    if (sign === '+'){
      !basket.has(itemId)
      ? basket.set(itemId, 1)
      : basket.set(itemId, basket.get(itemId) + 1)
    }else{
      basket.get(itemId) <= 1 
      ? basket.delete(itemId)
      : basket.set(itemId, basket.get(itemId) - 1)
    }
    dispatch({ type: CHANGE_PRODUCTS, changeGoods: basket })
  }
}

*/
