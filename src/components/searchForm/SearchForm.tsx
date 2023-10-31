import React, { FC, useState } from 'react'
import classes from './Search.module.css'
import { useMediaQuery } from 'react-responsive'
import ButtonMain from '../layout/buttons/buttonMain/ButtonMain'
import { useAppDispatch, useAppSelector } from '../../store/reduxHook'
import { selectArtticleList } from '../../store/selectors/articleSelectors'
import { setArticleList } from '../../store/slices/articlesSlice'

const SearchForm: FC = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 590px)',
  })
  const [search, setSearch] = useState('')
  const articleList = useAppSelector(selectArtticleList)
  const dispatch = useAppDispatch()
  console.log(search)

  const onClick = () => {
    if (articleList) {
      const searchResult = articleList.filter(({ title }) => {
        if (title !== undefined) {
          return title.toLowerCase().includes(search.toLowerCase())
        }
        return false
      })
      dispatch(setArticleList(searchResult))
    }
  }

  return (
    <div className={classes.searchForm}>
      {isMobile ? (
        <input
          className={classes.searchTextMob}
          type="text"
          placeholder="Поиск"
          name="search-mob"
          value={search}
        />
      ) : (
        <>
          <input
            className={classes.searchText}
            type="text"
            placeholder="Поиск по объявлениям"
            name="searchInput"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <ButtonMain text="Найти" onClick={onClick} />
        </>
      )}
    </div>
  )
}

export default SearchForm
