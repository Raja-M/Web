import React from 'react'
import { News } from '../../News/News'

const NewsManage = ({ darkMode, setDarkMode }) => {
  return (
    <div>
      <News Detail={true} darkMode={darkMode} setDarkMode={setDarkMode} ></News>
    </div>
  )
}

export default NewsManage