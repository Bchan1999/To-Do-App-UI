import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";

const toDoItem = [
  {
    header: "TestHeader1",
    description: "Test description1",
    dateCreated: "Date1",
    dateDue: "Date due1",
    id: 1,
  },
  {
    header: "TestHeader2",
    description: "Test description2",
    dateCreated: "Date2",
    dateDue: "Date due2",
    id: 2,
  },
  {
    header: "TestHeader3",
    description: "Test description3",
    dateCreated: "Date3",
    dateDue: "Date due3",
    id: 3,
  },
];

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
        be{bull}nev{bull}o{bull}lent
      </Typography>
      <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

const topicItems = toDoItem.map((item) => (
  <>
    <Box sx={{ p: 2 }}>
      <Card variant="outlined">
        <CardHeader title={item.header} subheader={item.dateDue} />
        <ul>
          <li>{item.description}</li>
          <li>{item.dateCreated}</li>
        </ul>
      </Card>
    </Box>
  </>
));
// const listItems = toDoItem.map()

function ToDoList() {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row" }}>{topicItems}</Box>
    </>
  );
}

export default ToDoList;
