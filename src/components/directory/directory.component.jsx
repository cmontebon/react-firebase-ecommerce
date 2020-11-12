import React from 'react';
import './directory.styles.scss';

import MenuItem from '../menu-item/menu-item.component';

import SHOP_DATA from '../../fixtures/shop.data.js';

class Directory extends React.Component {
    constructor(){
        super();
        this.state = {
            sections: SHOP_DATA
        }
    }
      
    render(){
        return (
            <div className="directory-menu">
                {this.state.sections.map(({id, ...restProps}) => (
                    <MenuItem key={id} {...restProps} />
                ))}
            </div>
        )
    }

}

export default Directory;
