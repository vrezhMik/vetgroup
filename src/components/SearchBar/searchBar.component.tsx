import Search from "../Search/search.component";
import style from "./searchbar.module.scss";
export default function SearchBar() {
  return (
    <div className={style.searchBar}>
      <Search />
    </div>
  );
}
