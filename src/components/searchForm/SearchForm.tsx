import React, { FC } from 'react'
import classes from './Search.module.css'
import { useMediaQuery } from 'react-responsive'
import ButtonMain from '../layout/buttons/buttonMain/ButtonMain'

const SearchForm: FC = () => {
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
        <>
          <input
            className={classes.searchText}
            type="search"
            placeholder="Поиск по объявлениям"
            name="search"
          />
          <ButtonMain text="Найти" onClick={() => console.log('search')} />
        </>
      )}
    </form>
  )
}

export default SearchForm
