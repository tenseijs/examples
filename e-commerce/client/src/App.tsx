import React from 'react'

import { useProductsQuery } from './generated'

const App = () => {
  const { data, isLoading, error } = useProductsQuery({
    endpoint : 'http://localhost:8810/graphql'
  })

  if (isLoading) {
    return <div className="box">Loading...</div>;
  }
  if (error) {
    return <div>Error!</div>;
  }

  console.log(data)
  
  return (
    <div>
     
    </div>
  )
}

export default App
