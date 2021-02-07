import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPageContainer from '../../pages/collection/collection.container';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import './shop.styles.scss'
class ShopPage extends React.Component {
    componentDidMount() {
        const { fetchCollectionsStart } = this.props;
        fetchCollectionsStart();
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
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
