import { createSelector } from 'reselect';

const shop = state => state.shop;

export const selectShopCollections = createSelector(
    [shop],
    (shop) => shop.collections
)