import React, { FC, useState } from 'react'
import classes from './Search.module.css'
import { useMediaQuery } from 'react-responsive'
import { useAppDispatch, useAppSelector } from '../../store/reduxHook'
import { selectArtticleList } from '../../store/selectors/articleSelectors'
import { changeSearchResultArticleList } from '../../store/slices/articlesSlice'

const SearchForm: FC = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 590px)',
  })
  const [search, setSearch] = useState('')
  const articleList = useAppSelector(selectArtticleList)
  const dispatch = useAppDispatch()

  const searchData = () => {
    if (articleList) {
      if (search) {
        const searchResult = articleList.filter(({ title }) => {
          if (title !== undefined) {
            return title.toLowerCase().includes(search.toLowerCase())
          }
          return false
        })
        dispatch(changeSearchResultArticleList(searchResult))
      } else {
        dispatch(changeSearchResultArticleList(articleList))
      }
    }
  }

  return (
    <div className={classes.searchForm}>
      {isMobile ? (
        <input
          className={classes.searchTextMob}
          type="search"
          placeholder="Поиск"
          name="search-mob"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
            searchData()
          }}
        />
      ) : (
        <input
          className={classes.searchText}
          type="search"
          placeholder="Поиск по объявлениям"
          name="searchInput"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
            searchData()
          }}
        />
      )}
    </div>
  )
}

export default SearchForm
