import { createSelector } from "reselect";

// Input selector
const selectCart = state => state.cart;

// Output selectors
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedQuantity, currentTtem) => (accumulatedQuantity + currentTtem.quantity), 0)
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedPrice, currentTtem) => (accumulatedPrice + currentTtem.quantity * currentTtem.price), 0)
);