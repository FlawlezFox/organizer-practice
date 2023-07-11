import Button from "../../../common/el/button";
import { ReactComponent as EditSvg } from "../../../assets/edit.svg";
import { observer } from "mobx-react";

import TasksModal from "../el/TasksModal";
import tasksStore from "../../../store/tasksStore";

import "../../tasksPage/styles/page_tasks.css";

const TasksPage = () => {
    function handleCreateTask() {
        const modal: any = document.querySelector(".tasks-modal");
        modal.showModal();
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
                        tasksStore.tasks.map(task => {
                            return <tr key={task.id}>
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

            <TasksModal />
        </div>
    );
}

export default observer(TasksPage);