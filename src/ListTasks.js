import React from "react";

const ListTasks = ({tasks})=>{
    return(
        <>
            <h3 className="mb-3">Mi lista de tareas</h3>
            {
                tasks.map(task =>
                    <div className="mb-3 border rounded p-3" key={task.id}>
                           {task.description}
                    </div>
                    )
            }
        </>
    );
}

export default ListTasks;