import React , {useState} from "react";

function ToDoList(){

    const[tasks , setTasks] = useState([]);
    const[newTask , setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t => [...t , newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index){
        const updatedTask = tasks.filter((_,i) => i !== index);
        setTasks(updatedTask);
    }

    function moveTaskUp(index) {
        if (index > 0) {
          const updatedTask = [...tasks];
          const temp = updatedTask[index];
          updatedTask[index] = updatedTask[index - 1];
          updatedTask[index - 1] = temp;
          setTasks(updatedTask);
        }
      }
    
    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
          const updatedTask = [...tasks];
          const temp = updatedTask[index];
          updatedTask[index] = updatedTask[index + 1];
          updatedTask[index + 1] = temp;
          setTasks(updatedTask);
        }
    }

    
    return(
        <>
            <header>TODO LIST</header>
            <div className="todo-container">
                <div className="input-and-addbtn-container">
                    <input type="text" 
                       placeholder="Enter a Task" 
                       value={newTask}
                       onChange={handleInputChange}
                     />
                    <button onClick={addTask} >ADD</button>
                </div>
                <div className="tasks-container">
                    <ol>
                        {tasks.map((task, index) => (
                            <li key={index} className="task-item">
                                <div className="tasks-and-btn-container">
                                    <span className="tasks-name">{task}</span>
                                    <div className="tasks-btns">
                                        <button className="del-btn" onClick={() => deleteTask(index)}>DELETE</button>
                                        <button className="up-btn" onClick={() => moveTaskUp(index)}>&#9650;</button>
                                        <button className="down-btn" onClick={() => moveTaskDown(index)}>&#9660;</button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div> 
            </div>
        </>
    );
}

export default ToDoList;