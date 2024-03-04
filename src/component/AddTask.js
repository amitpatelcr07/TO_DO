import { useState } from "react";
import "../style/AddTask.css";
const AddTask = () => {
  const [todo, setTodo] = useState([]);
  const [task, setTask] = useState();
  const [description, setDescription] = useState();
  const [priority, setPriority] = useState("Low");
  const [edit,setEdit]=useState(false);
  const [clickId,setClickId]=useState();
  const [copletedTask,setCompletedTask]=useState([]);
  const [tasktoggle,setTasktoggle]=useState(true);

  const inputHandler = (e) => {
    let current = e.target;
    current.alt == "Task"
      ? setTask(current.value)
      : current.alt == "Description"
      ? setDescription(current.value)
      : setPriority(current.value);
  };

  const addInputHandler = () => {

  
    if(edit){
        alert('you want to edit ??😊😊😊😊😊😊');
        todo.map((val)=>{
            if(val.id==clickId){
                val.task=task;
                val.description=description;
                val.priority=priority;
            }
        })
        setTodo(todo);
        setEdit(false);
    }else{
        setTodo([
            ...todo,
            {
              id: `${todo.length}`,
              status: "",
              task: `${task}`,
              description: `${description}`,
              priority: `${priority}`,
            },
          ]);
    }
    setTask("");
    setDescription("");
    setPriority("Low");
  };

  const updateHandler=(id,type)=>{
    // console.log(id,type);
    setEdit(true);
    setClickId(id);
    let x=todo.filter((val)=>val.id==id);

    if(type=='edit'){
        setTask(x[0].task);
        setDescription(x[0].description);
        setPriority(x[0].priority);
       
    }else if(type=='delete'){
        console.log(type);
           let y= todo.filter((val)=>{
                if(val.id!=id){
                    return val;
                }
            })
            setTodo(y);
    }else{
        setCompletedTask([...copletedTask,x]);
        let complete=todo.filter((val)=>{
            if(val.id!=id){
                 return val;
            }
        })
        setTodo(complete);
    }
     
  }

  const completeHandler=()=>{
    setTasktoggle(false);
  }
  
  const pendingHandler=()=>{
    setTasktoggle(true);
  }
//   console.log(copletedTask);
  return (
    <>
      <div className="Task-container">
        <div className="Task-input-container">
          <h5>Task</h5>
          <input alt="Task" onChange={inputHandler} value={task} />
          <h5>Description</h5>
          <input
            alt="Description"
            onChange={inputHandler}
            value={description}
          />
          <h5>Priority</h5>
          <select alt="Priority" onChange={inputHandler} value={priority}>
            <option>Low</option>
            <option>Medium</option>
            <option>Heigh</option>
          </select>
          <br />
          <br />
          <button onClick={addInputHandler}>Save Task</button><button onClick={completeHandler}>Copmpleted Task {copletedTask.length}</button>
          <button onClick={pendingHandler}>Pending Task {todo.length}</button>
        </div>
        <div className="Show-container">
          {tasktoggle && todo.map((val) => {
            return (
              <>
                <ul>
                  <li>{val.task}</li>
                  <li>{val.description}</li>
                </ul>
                <div className="Show-updating-card">
                  <h5>{val.id} :Priority {val.priority}</h5>
                  <button onClick={()=>{updateHandler(val.id,"edit")}}>Edit</button>
                  <button onClick={()=>{updateHandler(val.id,"delete")}}>Delete</button>
                  <button onClick={()=>{updateHandler(val.id,"complete")}}>Complete</button>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AddTask;
