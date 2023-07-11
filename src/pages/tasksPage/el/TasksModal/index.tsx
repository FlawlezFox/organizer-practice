import { useState } from "react";
import { ReactComponent as CrossSvg } from "../../../../assets/cross.svg";

import Button from "../../../../common/el/button";
import tasksStore from "../../../../store/tasksStore";
import ITask from "../../../../common/interfaces/ITask";

import "./index.css";

const TasksModal = () => {
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    function handleSetName(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setName(e.target.value);
    }

    function handleSetDescription(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setDescription(e.target.value);
    }

    function handleAddTask() {
        const task: ITask = {
            id: tasksStore.id_counter++,
            name: name,
            description: description,
            event: "",
            status: "Не начато"
        };

        tasksStore.addTask(task);
    }

    function handleCloseModal() {
        const modal: any = document.querySelector(".tasks-modal");
        modal.close();
    }

    return (
        <dialog className="tasks-modal">
            <div className="tasks-modal-header">
                <span className="page-header-title">Новое дело</span>

                <button className="close-button" onClick={handleCloseModal}>
                    <CrossSvg />
                </button>
            </div>

            <div className="modal-forms">
                <div className="input-container">
                    <span className="input-title">Наименование</span>
                    <textarea 
                        className="modal-input" 
                        cols={30} 
                        rows={10} 
                        onChange={(e) => {handleSetName(e)}}
                    />
                </div>

                <div className="input-container">
                    <span className="input-title">Описание</span>
                    <textarea 
                        className="modal-input" 
                        cols={30} 
                        rows={10}
                        onChange={(e) => {handleSetDescription(e)}}
                    />
                </div>

                <div className="select-container">
                    <span className="input-title">Выберите событие:</span>
                    <select className="modal-select"></select>
                </div>
            </div>

            <div className="buttons-container">
                <Button
                    className="create-button"
                    actName="Создать"
                    onClick={handleAddTask}
                />

                <Button
                    className="cancel-button"
                    actName="Отмена"
                />
            </div>
        </dialog>
    );
}

export default TasksModal;