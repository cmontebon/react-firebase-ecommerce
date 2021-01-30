import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPageContainer from '../../pages/collection/collection.container';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

import './shop.styles.scss'
class ShopPage extends React.Component {
    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();
    }

    render() {
        const { match } = this.props;
        return ( 
            <div className="shop-page">
                <Route 
                    exact 
                    path={`${match.url}`} 
                    component={CollectionsOverviewContainer} 
                />
                <Route 
                    exact 
                    path={`${match.url}/:collectionId`} 
                    component={CollectionPageContainer}
                />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);
