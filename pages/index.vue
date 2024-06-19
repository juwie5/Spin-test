<template>
    <main class="container p-3">
        <h1>To-Do List</h1>
        <div class="d-flex align-items-center justify-content-between">
            <div>
                <h5>My Tasks</h5>
            </div>
            <div>
                <NuxtLink to="/add-task" class="btn btn-primary">Add Task</NuxtLink>
            </div>
        </div>
        <div>
            <Tasks />
        </div>
    </main>
</template>

<script setup lang="ts">
import Tasks from '../compoments/Tasks.vue';


</script>

<style scoped></style>