<template>
    <section>
        <div v-for="(task, index) in tasks" class="d-flex align-items-center justify-content-between border p-2 rounded my-3">
            <div :class="task.status === true ? 'text-decoration-line-through': ''">
                <h4>{{ task.title }}</h4>
                <p>{{ task.description }}</p>
                <div class="d-flex align-items-center gap-2">
                    <label for="">Status</label>
                    <input type="checkbox" name="" id="" @click="changeTaskStatus(index)">
                </div>
            </div>
            <div>
                <button @click="goToEdit(task.id)" class="btn btn-primary me-2">Edit Task</button>
                <button @click="deleteTask(index)" class="btn btn-secondary">Delete Task</button>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useTodoStore } from '../store/todo';
import { useRouter } from 'vue-router';

const store = useTodoStore();
const { tasks } = store;
const router = useRouter();

const goToEdit = (id:string) => {
    store.findTask(id);
    router.push({name: "task-id", params: {id: id}})
};

const changeTaskStatus = (index: number) => {
  store.changeTaskStatus(index);
};

const deleteTask = (index: number) => {
    store.deleteTaskFromStore(index);
};

</script>

<style scoped></style>