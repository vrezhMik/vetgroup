"use client";

import Search from "../Search/search.component";
import style from "./searchbar.module.scss";
import { useFilters } from "@/store/store";
export default function SearchBar() {
  const { filters } = useFilters();

  return (
    <div className={style.searchBar}>
      <Search />
      <div>
        {filters.map((filter, key) => (
          <span key={key}>{filter.value}</span>
        ))}
      </div>
    </div>
  );
}
