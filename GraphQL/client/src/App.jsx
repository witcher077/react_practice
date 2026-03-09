import './App.css';
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

const query = gql`
query GetTodoWithUser{
getTodos{
id
title
completed
user{
id 
name
}
}
}`

function App() {

  const { data, loading } = useQuery(query)

  console.log(data,loading)

  if (loading) return <h1>Loading...</h1>

  return (
    <>
      <h1>GraphQL</h1>
      <div>{JSON.stringify(data)}</div>

    </>
  )
}

export default App
