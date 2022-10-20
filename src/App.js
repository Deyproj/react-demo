import logo from './logo.svg';
import './App.css';
import {Col, Container, Row} from 'reactstrap'
import ListTasks from './ListTasks';
import { useEffect, useState } from 'react';
import axios from 'axios';
import FormTask from './FormTask';
//import FormTask from './FormTask';

function App() {

  const [tasks, setTasks] = useState([]);

  const cargarTareas = () =>{
    axios.get('http://localhost:9090/tasks')
    .then(({data}) => setTasks(data));
  }

  useEffect (cargarTareas, []);

  const onSubmit = (values) => {
    axios.post('http://localhost:9090/tasks', values)
    .then(() => cargarTareas());
  }

  const eliminarTarea = (task) => {
    axios.put(`http://localhost:9090/tasks/${task.id}`)
    .then(() => cargarTareas());
  }



return (
    <>
     <Container>
        <Row>
          <Col md="6">
              <ListTasks tasks={tasks} />
          </Col>
          <Col md="6">
              <FormTask onSubmit={onSubmit}/>
          </Col>
        </Row>
     </Container>
    </>
  );
}

export default App;
