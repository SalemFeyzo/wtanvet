import React from 'react'
import { Link } from 'react-router-dom'

const HeaderSearchResults = (props) => {
  const { name, id } = props.product
  let path = '/product/' + name + '/' + id
  path = path.split(' ').join('_')
  path = path.split('%').join('_')
  return (
    <div onClick={() => props.toggle()}>
      <Link to={path}>
        <p>{name}</p>
      </Link>
    </div>
  )
}

export default HeaderSearchResults
