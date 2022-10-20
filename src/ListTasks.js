import {faEdit, faTrash, faCheckCircle, faClock} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from "react";

const ListTasks = ({tasks, onDelete})=>{
    return(
        <>
            <h3 className="mb-3">Mi lista de tareas</h3>
            {
                tasks.map(task =>
                    <div className="mb-3 border rounded p-3" key={task.id}>
                          <div className='d-flex justify-content-between mb-1'>
                            <div className="fw-bold">{task.description}</div>
                            <div className='text-muted small'>
                                <FontAwesomeIcon icon={faEdit} className="cursor-pointer" onClick={() => onDelete(task)}/>
                                <FontAwesomeIcon icon={faTrash} className="cursor-pointer ms-2"/>
                            </div>
                          </div>

                          <div>
                            {
                               task.done ?
                               <div className='text-success small'>
                                    <FontAwesomeIcon icon={faCheckCircle} />{" "}
                                    Completado
                               </div>
                               :
                               <div className='text-secondary small'>
                                    <FontAwesomeIcon icon={faClock} />{" "}
                                    Pendiente
                               </div>
                            }
                          </div>
                    </div>
                    )
            }
        </>
    );
}

export default ListTasks;