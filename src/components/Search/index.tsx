import React from 'react';
import IconSearch from '../../assets/icons/search';
import './search.sass';

const SearchBox = () => {
    return (
        <div className='search_box'>
            <input type="text" className="search_input" value="Search..." />
            <div className='search_icon'>
                <IconSearch />
            </div>
        </div>
    );
}

export default SearchBox;