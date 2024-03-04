import { useState } from "react";

const AddInput = () => {
  const [getInput, setInput] = useState({ id: "", input: "" });
  const [task, setTask] = useState([]);
  const [editIndex, setEditIndex] = useState();
  const [edit, setEdit] = useState(false);
  const getInputHandler = (e) => {
    setInput({ id: `${task.length}`, input: `${e.target.value}` });
  };

  const addInputHandler = () => {
    if (edit) {
      // task[editIndex]=getInput
      setTask([...task, getInput]);
      setEdit(false);

      task.map((val) => {
        if (val.id === editIndex) {
          val.input = getInput.input;
        }
      });

      setTask(task)
    } else {
      setTask([...task, getInput]);
    }

    setInput({ id: "", input: "" });
  };

  const editHandler = (e) => {
    console.log(task[e].input);
    setInput({ id: `${e}`, input: `${task[e].input}` });
    setEditIndex(e);
    setEdit(true);
  };

  const deleteHandler = () => {
    console.log(task);
  };

  return (
    <>
      <input onChange={getInputHandler} value={getInput.input} />{" "}
      <button onClick={addInputHandler}>Add</button>
      {task?.map((val) => {
        return (
          <>
            <div>
              <p>{val.input}</p>
              <button
                onClick={() => {
                  editHandler(val.id);
                }}
              >
                Edit
              </button>
              <button onClick={deleteHandler}>Delete</button>
            </div>
          </>
        );
      })}
    </>
  );
};

export default AddInput;
