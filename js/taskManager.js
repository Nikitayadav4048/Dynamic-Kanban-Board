// Task management and rendering
const TaskManager = {
    // Create task card element
    createTaskCard(task) {
        const card = document.createElement('div');
        card.className = 'task-card';
        card.dataset.taskId = task.id;
        card.innerHTML = `
            <h3>${task.title}</h3>
            <p>${task.description}</p>
        `;
        
        // Make it draggable
        DragDrop.makeTaskDraggable(card);
        return card;
    },

    // Render all tasks in their respective columns
    renderTasks() {
        const tasks = Storage.getTasks();
        
        // Clear all columns
        document.querySelectorAll('.tasks').forEach(column => {
            column.innerHTML = '';
        });

        // Group tasks by status and render
        tasks.forEach(task => {
            const column = document.getElementById(`${task.status}Tasks`);
            if (column) {
                column.appendChild(this.createTaskCard(task));
            }
        });
    },

    // Add new task
    addTask(title, description) {
        const newTask = {
            title: title.trim(),
            description: description.trim(),
            status: 'todo'
        };
        
        Storage.addTask(newTask);
        this.renderTasks();
    }
};