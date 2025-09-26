import React from 'react';
import './App.css';
import ToDoList from './Components/ToDoList.js';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtoolsPanel } from '@tanstack/react-query-devtools'

function App() {
  //create a client
  const queryClient = new QueryClient()

  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <QueryClientProvider client={queryClient}>
      <ToDoList/>
       <button
        onClick={() => setIsOpen(!isOpen)}
      >{`${isOpen ? 'Close' : 'Open'} the devtools panel`}</button>
      {isOpen && <ReactQueryDevtoolsPanel onClose={() => setIsOpen(false)} />}
    </QueryClientProvider>
  );
}

export default App;
