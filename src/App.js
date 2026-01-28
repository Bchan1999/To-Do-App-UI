import React, { use } from 'react';
import './App.css';
import ToDoList from './Components/ToDoList.js';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ReactQueryDevtoolsPanel } from '@tanstack/react-query-devtools'
import { useQuery } from '@tanstack/react-query';

const fetchTodo = async () => {
  const res = await fetch('http://localhost:8080/todo')
  if (!res.ok) throw new Error("Error fetching data")
  return res.json()
}

function App() {
  //passes queries key for refetching and caching
  const {data, isLoading, error} = useQuery({
    queryKey: ["todo"], 
    queryFn: fetchTodo
  })

  const [isOpen, setIsOpen] = React.useState(false)

  if (isLoading) return <p>Loading...</p>
  
  if (error) return <p>Error occured: {error.message}</p>
  return (
  <>
      <ul>
        {data.map((todo) => (
        <li>{todo.header}</li>
        ))}
      </ul>
      <ToDoList/>
       <button
        onClick={() => setIsOpen(!isOpen)}
      >{`${isOpen ? 'Close' : 'Open'} the devtools panel`}</button>
      {isOpen && <ReactQueryDevtoolsPanel onClose={() => setIsOpen(false)} />}
  </>
  );
}

export default App;
