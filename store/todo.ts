import { defineStore } from "pinia";
import type { ITodo } from '~/type/todo';


export const useTodoStore = defineStore("todo", {
    state: () => ({
        tasks : <ITodo[]>[],
        singleTask: <ITodo[]>[]
        // return { tasks };
    }),
    actions:{
        addTaskToStore(id:string, title: string, description: string, status: boolean){
            this.tasks.push({ id: id, title: title, description:description, status: status });
        },
        findTask(id:string){
           this.singleTask = this.tasks.find(t => t.id === id);
        },
        changeTaskStatus(taskIndex: number){
            this.tasks[taskIndex].status = !this.tasks[taskIndex].status;
        },
        changeTaskContent(){

        },
        deleteTaskFromStore(taskIndex: number) {
			this.tasks.splice(taskIndex, 1);
		},
    },
    getters: {
        getAllTask: (state) => {
            return state.tasks
        },
        getSingleTask: (state) => {
            return state.singleTask
        }
    },
    persist: true
})