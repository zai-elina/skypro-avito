import React from 'react'
import classes from './Search.module.css'
import { useMediaQuery } from 'react-responsive'

const SearchForm = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 590px)',
  })
  return (
    <form className={classes.searchForm}>
      {isMobile ? (
        <input
          className={classes.searchTextMob}
          type="search"
          placeholder="Поиск"
          name="search-mob"
        />
      ) : (
        <input
          className={classes.searchText}
          type="search"
          placeholder="Поиск по объявлениям"
          name="search"
        />
      )}

      <button className={classes.searchBtn}>Найти</button>
    </form>
  )
}

export default SearchForm
