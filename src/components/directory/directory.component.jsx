import React from 'react';
import './directory.styles.scss';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { selectDirectorySections } from '../../redux/directory/directory.selectors'

import MenuItem from '../menu-item/menu-item.component';

const Directory = ({ sections }) => {
    return (
        <div className="directory-menu">
            {sections.map(({id, ...restProps}) => (
                <MenuItem key={id} {...restProps} />
            ))}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})



export default connect(mapStateToProps)(Directory);
