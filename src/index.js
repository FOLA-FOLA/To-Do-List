import { format, parseISO, isAfter, isBefore, addDays, differenceInDays, isToday, isPast } from 'date-fns';

const projects = []
const allTasks = []

const taskForm = document.querySelector('taskform'); // Get task form element
const taskFormData = new FormData(taskForm)

const projectForm = document.querySelector('projectform'); // Get project form element
const projectFormData = new FormData(projectForm)


function createTask(title, description, dueDate, priority) {
    const parsedDueDate = parseISO(dueDate);  
    
    return {
        id: Date.now() + Math.random(), // More unique ID
        title,
        description,
        dueDate: parsedDueDate,
        formattedDueDate: format(parsedDueDate, 'MMM dd, yyyy'),
        priority, // 'low', 'medium', 'high'
        completed: false,
        notes: '',
        checklist: [], // Array of sub-tasks
        isOverdue: isPast(parsedDueDate),
        isDueToday: isToday(parsedDueDate),
        daysUntilDue: differenceInDays(parsedDueDate, new Date()),
        createdAt: new Date(),
        formattedCreatedAt: format(new Date(), 'MMM dd, yyyy h:mm a')
    };
}

function createProject() {
    const project = { 
        id: Date.now() + Math.random(),
        name,
        tasks: [],
        createdAt: new Date()
    }
    projects.push(project);
    
    // Set as current if 1st
    if (!currentProject) {
        currentProject = project;
    }
    
    return project;
}


function saveToLocalStorage() {
    try {
        // Convert your data to JSON format
        const dataToSave = {
            projects: projects.map(project => ({
                id: project.id,
                name: project.name,
                tasks: project.tasks.map(task => ({
                    id: task.id,
                    title: task.title,
                    description: task.description,
                    dueDate: task.dueDate.toISOString(), // Convert Date to string
                    priority: task.priority,
                    completed: task.completed,
                    notes: task.notes,
                    checklist: task.checklist,
                    createdAt: task.createdAt.toISOString()
                }))
            })),
            currentProjectId: currentProject?.id || null
        };
        
        // Save to localStorage
        localStorage.setItem('todoAppData', JSON.stringify(dataToSave));
    } catch (error) {
        console.error('Failed to save to localStorage:', error);
    }
}

function loadFromLocalStorage() {
    try {
        // Get data from localStorage
        const savedData = localStorage.getItem('todoAppData');
        
        // Check if data exists
        if (!savedData) {
            createDefaultProject();
            return;
        }
        
        // Parse JSON data
        const parsedData = JSON.parse(savedData);
        
        // Restore projects array
        projects.length = 0; // Clear existing array
        parsedData.projects.forEach(projectData => {
            const project = {
                id: projectData.id,
                name: projectData.name,
                tasks: projectData.tasks.map(taskData => ({
                    id: taskData.id,
                    title: taskData.title,
                    description: taskData.description,
                    dueDate: new Date(taskData.dueDate), // Convert back to Date
                    priority: taskData.priority,
                    completed: taskData.completed,
                    notes: taskData.notes,
                    checklist: taskData.checklist,
                    createdAt: new Date(taskData.createdAt)
                }))
            };
            projects.push(project);
        });
        
        // Set current project
        if (parsedData.currentProjectId) {
            currentProject = projects.find(p => p.id === parsedData.currentProjectId);
        }
        
    } catch (error) {
        console.error('Failed to load from localStorage:', error);
        createDefaultProject();
    }
}

function addTask () {}

function removeTask() {}

function markComplete (task) {}


