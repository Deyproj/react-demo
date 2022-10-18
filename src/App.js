import logo from './logo.svg';
import './App.css';
import {Col, Container, Row} from 'reactstrap'
import ListTasks from './ListTasks';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [tasks, setTasks] = useState([]);

  const cargarTareas = () =>{
    axios.get('http://localhost:9090/tasks')
    .then(({data}) => setTasks(data));
  }

  useEffect (cargarTareas, []);


  return (
    <>
     <Container>
        <Row>
          <Col>
              <ListTasks tasks={tasks} />
          </Col>
        </Row>
     </Container>
    </>
  );
}

export default App;
