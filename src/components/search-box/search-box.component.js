import React from "react";
import "./search-box.styles.css"

// Takes a placeholder value as props
// Takes a callbackfunction in handleChange prop

export const SearchBox = ({placeholder, handleChange}) => {
  return(
    <input
      type='search'
      placeholder={placeholder}
      onChange={handleChange}
    />
  )
}