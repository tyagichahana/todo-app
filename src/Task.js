import React, { useState } from "react";

const Task = ({ categoryName, tasks, isOpen, index, changeAccordian, addTask, updateStatus, deleteTask, deleteCategory }) => {
  const [taskName, updateTaskName] = useState('');

  const handleAddTask = (e, taskName, index) => {
    e.preventDefault();
    addTask(taskName, index);
    updateTaskName('');
  }

  return (
    <div className="task">
      <div className="accordian">
        <div>
          Bucket {index + 1}. {categoryName}
        </div>
        <div className="flex">
          <span onClick={() => changeAccordian(index, !isOpen)}>
            {isOpen === false ? <i className="material-icons">keyboard_arrow_down</i> : <i className="material-icons">keyboard_arrow_up</i>}
          </span>
          <i onClick={() => deleteCategory(index)} className="material-icons">delete</i>
        </div>
      </div>
      {isOpen ? <>
        <form className="category" onSubmit={(e) => handleAddTask(e, taskName, index)}>
          <input type="text" placeholder="Write task name" value={taskName} onChange={(e) => updateTaskName(e.target.value)} />
          <button type="submit">
            Add Task
          </button>
        </form>
        {tasks.map((elm, inx) => (
          <div key={inx} className={elm.status ? 'taskList done' : 'taskList'}>
            <div className="flex">
              <input className="mrgnRight15" onClick={() => updateStatus(index, inx, !elm.status)} checked={elm.status} type="radio" />
              <span className={elm.status ? 'strike': undefined}>{elm.name}</span>
            </div>
            <div className="flex">
              <div>{elm.status ? <i className="green material-icons">done_outline</i> : <i className="yellow material-icons">query_builder</i>}</div>
              <div onClick={() => deleteTask(index, inx)}><i className="material-icons">delete</i></div>
            </div>
          </div>
        ))}
      </>
        : ''
      }
    </div>
  )
};

export default Task;
