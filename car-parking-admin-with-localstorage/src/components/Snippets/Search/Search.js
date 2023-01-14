import { BiSearch } from 'react-icons/bi';
import './Search.css';

const Search = ({ itemSearch, placeholder }) => {
    return (
        <div className="menu-search">
            <span>
                <BiSearch />
            </span>
            <div className="search-field">
                <input
                    type="text"
                    onChange={(e) => itemSearch(e.target.value)}
                    placeholder={placeholder}
                />
            </div>
        </div>
    );
};

export default Search;
