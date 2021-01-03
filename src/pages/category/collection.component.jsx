import React from 'react';

import './collection.styles.scss';

const CollectionPage = ({match}) => {
    console.log(match);

    return (
        <div>
            <h1>Collection Page - {match.params.collectionId}</h1>
        </div>
    )
}

export default CollectionPage;