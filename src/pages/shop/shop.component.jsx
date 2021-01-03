import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../../components/collection-preview/collection-preview.component'

import SHOP_DATA from '../../fixtures/shop.data'
import { selectShopCollections } from '../../redux/shop/shop.selectors'

import './shop.styles.scss'

const ShopPage = ({ collections }) => (
    <div>
        {collections.map(({id, ...otherProps }) => (
            <CollectionPreview key={id} {...otherProps} />
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
})

export default connect(mapStateToProps)(ShopPage);
