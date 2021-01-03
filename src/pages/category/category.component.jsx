import React from 'react';

import './category.styles.scss';

const CategoryPage = ({match}) => {
    console.log(match);

    return (
        <div>
            <h1>Category Page - {match.params.categoryID}</h1>
        </div>
    )
}

export default CategoryPage;