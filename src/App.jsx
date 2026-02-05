import "./App.css";
import ToDoList from "./Components/ToDoList.jsx";
import { ReactQueryDevtoolsPanel } from "@tanstack/react-query-devtools";
import { useQuery } from "@tanstack/react-query";
import ButtonUsage from "./Components/ButtonUsage.jsx";

import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const fetchTodo = async () => {
  const res = await fetch("http://localhost:8080/todo");
  if (!res.ok) throw new Error("Error fetching data");
  return res.json();
};

function App() {
  //passes queries key for refetching and caching
  const { data, isLoading, error } = useQuery({
    queryKey: ["todo"],
    queryFn: fetchTodo,
  });

  const [isOpen, setIsOpen] = React.useState(false);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error occured: {error.message}</p>;
  return (
    <>
      <ul>
        {data.map((todo) => (
          <li>{todo.header}</li>
        ))}
      </ul>
      <ToDoList />
      <ButtonUsage />
      <button
        onClick={() => setIsOpen(!isOpen)}
      >{`${isOpen ? "Close" : "Open"} the devtools panel`}</button>

      {isOpen && <ReactQueryDevtoolsPanel onClose={() => setIsOpen(false)} />}
      <Container maxWidth="sm">
        <Box sx={{ flexDirection: "row" }}>
          <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
            Material UI Vite.js example
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export default App;
