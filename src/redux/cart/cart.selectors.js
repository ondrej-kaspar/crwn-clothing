import { createSelector } from "reselect";

// Input selector
const selectCart = state => state.cart;

// Output selectors
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedQuantity, currentTtem) => (accumulatedQuantity + currentTtem.quantity), 0)
)