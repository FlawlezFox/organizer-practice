import Button from "../../../common/el/button";
import tasks from "./tasks";
import { ReactComponent as EditSvg } from "../../../assets/edit.svg";

import "../../tasksPage/styles/page_tasks.css";

const TasksPage = () => {
    function handleCreateTask() {
        alert("");
    }

    return (
        <div className="page-tasks-container">
            <span className="greeting">Здравствуйте, Андрей</span>

            <div className="page-tasks-header">
                <span className="page-header-title">Список дел</span>

                <Button
                    className="create-button"
                    actName="Создать"
                    onClick={handleCreateTask}
                />
            </div>

            <table className="tasks-table">
                <thead>
                    <tr>
                        <th>Наименование</th>
                        <th>Описание</th>
                        <th>Событие</th>
                        <th>Статус</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {
                        tasks.map(task => {
                            return <tr>
                                <td>{task.name}</td>
                                <td>{task.description}</td>
                                <td>{task.event}</td>
                                <td
                                    style={{
                                        color: task.status === "В процессе" 
                                            ? "var(--dark-blue)" 
                                            : task.status === "Выполнено" 
                                            ? "var(--dark-green)"
                                            : "var(--grey)"
                                    }}
                                >{task.status}</td>
                                <td>
                                    <button className="edit-button">
                                        <EditSvg />
                                    </button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default TasksPage;