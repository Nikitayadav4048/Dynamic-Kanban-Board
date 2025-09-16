// Drag and drop functionality
const DragDrop = {
    // Initialize drag and drop events
    init() {
        this.setupColumnListeners();
    },

    // Setup drop zone listeners for columns
    setupColumnListeners() {
        document.querySelectorAll('.tasks').forEach(column => {
            column.addEventListener('dragover', this.handleDragOver);
            column.addEventListener('drop', this.handleDrop);
            column.addEventListener('dragleave', this.handleDragLeave);
        });
    },

    // Make task card draggable
    makeTaskDraggable(taskElement) {
        taskElement.draggable = true;
        taskElement.addEventListener('dragstart', this.handleDragStart);
        taskElement.addEventListener('dragend', this.handleDragEnd);
    },

    handleDragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.dataset.taskId);
        e.target.classList.add('dragging');
    },

    handleDragEnd(e) {
        e.target.classList.remove('dragging');
    },

    handleDragOver(e) {
        e.preventDefault();
        e.currentTarget.classList.add('drag-over');
    },

    handleDragLeave(e) {
        e.currentTarget.classList.remove('drag-over');
    },

    handleDrop(e) {
        e.preventDefault();
        e.currentTarget.classList.remove('drag-over');
        
        const taskId = parseInt(e.dataTransfer.getData('text/plain'));
        const newStatus = e.currentTarget.parentElement.dataset.status;
        
        // Update task status and re-render
        Storage.updateTaskStatus(taskId, newStatus);
        TaskManager.renderTasks();
    }
};