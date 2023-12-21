import React, { ChangeEvent, useState } from 'react';
import IconSearch from '../../assets/icons/search';
import './search.sass';

interface SearchBoxProps {
    onSearch: (query: string) => void;
    placeholder?: string;
}

const SearchBox = ({ onSearch }: SearchBoxProps) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newQuery = event.target.value;
        setQuery(newQuery);
        onSearch(newQuery);
    };

    return (
        <div className='search_box'>
            <input
                type="text"
                className="search_input"
                placeholder="Search..."
                value={query}
                onChange={handleInputChange}
            />
            <div className='search_icon'>
                <IconSearch />
            </div>
        </div>
    );
}

export default SearchBox;