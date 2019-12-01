import React, { useReducer, useState } from "react";
import Task from "./Task";

const initialState = {
  data: [
    //   {
    //   categoryName:'React',

    //   tasks:[
    //     {
    //       taskName:'',
    //       taskStatus:"Planned",

    //     }
    //   ]
    // },
    // {
    //   categoryName:'CSS',
    //   tasks:[
    //     {
    //       taskName:'',
    //       taskStatus:"Done",

    //     }
    //   ]
    // }
    // {
    //   categoryName:'Javascript',
    //   tasks:[
    //     {
    //       taskName:'',
    //       taskStatus:"Done",

    //     }
    //   ]
    // }
  ]
};

const localReducer = (state, action) => {
  if (action.type) {
    return {
      ...state,
      [action.type]: action.value
    };
  }
  return state;
};

const App = () => {
  const [state, dispatch] = useReducer(localReducer, initialState);
  const [category, updateCategoryName] = useState('')
  const { data } = state;

  const addCategory = (e) => {
    e.preventDefault();
    if (!category) {
      return '';
    }
    data.push({
      categoryName: category,
      isOpen: true,
      tasks: []
    })
    dispatch({
      type: "data",
      value: data,
    });
    updateCategoryName('')
  }

  const changeAccordian = (key, open) => {
    data[key].isOpen = open;
    dispatch({
      type: 'data',
      value: data,
    })
  }
  const updateStatus = (inx, taskinx, status) => {
    data[inx].tasks[taskinx].status = status
    dispatch({
      type: 'data',
      value: data,
    })
  }

  const addTask = (taskName, index) => {
    if (!taskName) {
      return '';
    }
    data[index].tasks.push({ name: taskName, status: false });
    dispatch({
      type: 'data',
      value: data,
    })
  }
  const deleteCategory = (index) => {
    data.splice(index, 1);
    dispatch({
      type: 'data',
      value: data,
    })
  }
  const deleteTask = (index, inx) => {
    data[index].tasks.splice(inx, 1)
    dispatch({
      type: 'data',
      value: data,
    })
  }

  return (
    <div>
      <div className="row">
        <form className="category" onSubmit={(e) => addCategory(e)}>
          <input type="text" placeholder="Add your task bucket" value={category} onChange={(e) => updateCategoryName(e.target.value)} />
          <button type="submit">
            Add Category
          </button>
        </form>

        <div className="task-pane">
          {data.map((part, idx) => (
            <Task deleteCategory={deleteCategory} deleteTask={deleteTask} updateStatus={updateStatus} changeAccordian={changeAccordian} addTask={addTask} index={idx} key={idx} {...part} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
