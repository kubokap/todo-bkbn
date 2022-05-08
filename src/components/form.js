import React from "react";
const Form = () => {
    return(
        <form>
        <input type="text" className="task-input" />
        <button className="add-button" type="submit">
        <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
            <select name="todos" className="filter">
                <option value="all">All</option>
                <option value="Completed">Completed</option>
                <option value="Uncompleted">Uncompleted</option>
            </select>
        </div>
        </form>
    );
};

export default Form;