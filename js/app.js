// Main application logic
document.addEventListener('DOMContentLoaded', () => {
    // Initialize drag and drop
    DragDrop.init();
    
    // Load and render existing tasks
    TaskManager.renderTasks();
    
    // Handle form submission
    document.getElementById('taskForm').addEventListener('submit', (e) => {
        e.preventDefault();
        
        const title = document.getElementById('taskTitle').value;
        const description = document.getElementById('taskDescription').value;
        
        if (title && description) {
            TaskManager.addTask(title, description);
            
            // Clear form
            document.getElementById('taskTitle').value = '';
            document.getElementById('taskDescription').value = '';
        }
    });
});