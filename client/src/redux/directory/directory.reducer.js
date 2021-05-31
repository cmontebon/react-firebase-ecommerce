import SHOP_SECTIONS from '../../fixtures/sections.data';

const INITIAL_STATE = {
  sections: SHOP_SECTIONS
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default: 
            return state;
    }
}

export default directoryReducer;