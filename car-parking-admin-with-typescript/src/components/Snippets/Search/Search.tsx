import { BiSearch } from 'react-icons/bi';
import './Search.css';

const Search = () => {
    return (
        <div className='menu-search'>
            <span>
                <BiSearch />
            </span>
            <div className='search-field'>
                <input type='text' placeholder='Search...' />
            </div>
        </div>
    );
};

export default Search;
