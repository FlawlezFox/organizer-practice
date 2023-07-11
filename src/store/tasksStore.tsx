import { makeAutoObservable, runInAction } from "mobx";
import ITask from "../common/interfaces/ITask";

class tasksStore {
    tasks: ITask[] = [];
    id_counter = 0;

    constructor() {
        makeAutoObservable(this);
    }

    addTask = (task: ITask) => {
        this.tasks.push(task);
    }

    removeTask = (task: ITask) => {
        this.tasks= this.tasks.filter(t => t.id !== task.id);
    }
}

export default new tasksStore();