import React from 'react';

import './shop.styles.scss'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import SHOP_DATA from '../../fixtures/shop.data'

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state;
        return (
            <div>
                {collections.map(({id, ...otherProps }) => (
                    <CollectionPreview key={id} {...otherProps} />
                ))}
            </div>
        )
    }
}

export default ShopPage;
