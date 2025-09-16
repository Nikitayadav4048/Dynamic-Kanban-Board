// Storage utility for localStorage operations
const Storage = {
    // Get tasks from localStorage
    getTasks() {
        return JSON.parse(localStorage.getItem('kanbanTasks') || '[]');
    },

    // Save tasks to localStorage
    saveTasks(tasks) {
        localStorage.setItem('kanbanTasks', JSON.stringify(tasks));
    },

    // Add a new task
    addTask(task) {
        const tasks = this.getTasks();
        tasks.push({ ...task, id: Date.now() });
        this.saveTasks(tasks);
        return tasks;
    },

    // Update task status
    updateTaskStatus(taskId, newStatus) {
        const tasks = this.getTasks();
        const task = tasks.find(t => t.id === taskId);
        if (task) {
            task.status = newStatus;
            this.saveTasks(tasks);
        }
        return tasks;
    }
};