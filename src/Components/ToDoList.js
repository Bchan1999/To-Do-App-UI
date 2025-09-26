import ToDoItem from "./ToDoItem";

const topics = [
  'Career',
  'Life Stuff',
  'Finance',
  'Health'
];

// const toDoItem = [{
//   header:'TestHeader1',
//   description: 'Test description1',
//   dateCreated: 'Date1',
//   dateDue: 'Date due1',
// }, {
//   header:'TestHeader2',
//   description: 'Test description2',
//   dateCreated: 'Date2',
//   dateDue: 'Date due2',
// }, {
//   header:'TestHeader3',
//   description: 'Test description3',
//   dateCreated: 'Date3',
//   dateDue: 'Date due3',
// }];

const topicItems = topics.map(topics => <li>{topics}</li>);
// const listItems = toDoItem.map()

function ToDoList() {
  return (
      <ul>{topicItems}</ul>
  );
}

export default ToDoList;