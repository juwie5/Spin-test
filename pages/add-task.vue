<template>
    <main class="container p-3">
        <div>
            <h2>Add Task</h2>

            <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">Title</label>
                <input type="text" class="form-control" id="formGroupExampleInput" v-model.trim="form.title"
                    placeholder="Enter Title">
            </div>
            <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">Description</label>
                <input type="text" class="form-control" id="formGroupExampleInput"
                    placeholder="Task Description" v-model.trim="form.description">
            </div>
            <div class="mb-3">
              <button @click="addTodo" class="btn btn-primary btn-lg">Create Task</button>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { nanoid } from 'nanoid';
import { useTodoStore } from '~/store/todo';
import { useRouter } from 'vue-router';


const store = useTodoStore();
const router = useRouter();

let form = reactive({
    title: "",
    description: ""
});


const addTodo = () => {
    store.addTaskToStore(nanoid(16), form.title, form.description, false);
    form.title = "";
    form.description = "";
    router.push({name: "index"})
};
</script>

<style scoped></style>