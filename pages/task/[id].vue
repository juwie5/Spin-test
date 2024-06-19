<template>
    <main class="container p-3">
        <div>
            <h5>Edit Task</h5>
        </div>
        <div class="d-flex flex-column align-items-center justify-content-between border p-2 rounded my-3">
            <div>
                <div class="row mb-3">
                    <label for="Title" class="col-form-label">Title</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="Title" v-model="singleTask.title">
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="Description" class="col-form-label">Description</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="Description" v-model="singleTask.description">
                    </div>
                </div>
                <div class="d-flex align-items-center gap-2">
                    <label for="Status">Status : </label>
                    <p>{{ singleTask.status }}</p>
                </div>
            </div>
            <div>
                <button @click="editTodo" class="btn btn-primary">Save Changes</button>
                <!-- <NuxtLink :to="`/task/${singleTask.id}`" class="btn btn-primary">Edit Task</NuxtLink> -->
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { useTodoStore } from '~/store/todo';
import { useRoute, useRouter } from 'vue-router';
import type { ITodo } from '~/type/todo';

const store = useTodoStore();
const route = useRoute();
const router = useRouter();

const id = route.params.id;

// onMounted(()=> {
//  
// })

const singleTask = store.getSingleTask;

const editTodo = () => {
    router.push({name: "index"})
};

</script>

<style scoped></style>