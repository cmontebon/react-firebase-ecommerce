import React from 'react';
import { Route } from 'react-router-dom';

import CategoryPage from '../../pages/category/category.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

import './shop.styles.scss'

const ShopPage = ({ match }) => {
    return (
        <div className="shop-page">
            <Route exact path={`${match.url}`} component={CollectionsOverview} />
            <Route exacth path={`${match.url}/:categoryID`} component={CategoryPage} />
        </div>
    )
}

export default ShopPage;
