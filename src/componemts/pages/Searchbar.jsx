import { useRef } from "react";
import useScrollDisable from "../hooks/useDisableScroll";
import useOutsideClose from "../hooks/useOutSideClose";
export default function Searchbar(props) {
  const { isSearchOpen, toggleSearch } = props;
  //   searchResults, setSearchResults
  const searchRef = useRef();

  const handleCloseSearch = () => {
    toggleSearch(false);
  };

  useOutsideClose(searchRef, handleCloseSearch);

  useScrollDisable(isSearchOpen);

  return (
    <div id="seachbar" className="backdrop">
      <div className="searchbar-box " ref={searchRef}>
        <input
          type="search"
          className="input_field"
          placeholder="Search for product..."
        />
      </div>
    </div>
  );
}
