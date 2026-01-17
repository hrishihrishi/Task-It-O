# TASK-IT-O
*React Task Orchestrator*

A simple and clean task management application built with React, Vite, and Tailwind CSS.

## Features

- ✅ **Add Tasks** - Create new tasks with a simple input field
- ✅ **Mark as Complete** - Toggle tasks between completed and incomplete states
- ✅ **Edit Tasks** - Modify existing task names using a modal interface
- ✅ **Delete Tasks** - Remove tasks you no longer need
- ✅ **Visual Feedback** - Different colors for completed (green) and pending (yellow) tasks

## Technologies Used

- **React** - UI component library
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Hooks** - `useState` for state management
- **React Portals** - For rendering the edit modal

## Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/hrishihrishi/React-task-manager.git

# Navigate to the project folder
cd React-task-manager/React-task-manager-vite

# Install dependencies
npm install

# Start the development server
npx vite
```

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── App.jsx          # Main app component
├── Header.jsx       # Contains state and handles all task operations
├── ToDoList.jsx     # Renders the list of tasks
├── ToDoItem.jsx     # Individual task component with action buttons
├── Modal.jsx        # Edit modal for updating task names
├── index.css        # Tailwind CSS configuration and custom styles
└── lib/
    └── utils.js     # Utility function for merging class names
```

## How It Works

### Component Overview

**Header.jsx**
- Manages all task state using `useState`
- Contains functions for adding, editing, deleting, and marking tasks complete
- Passes these functions down to child components as props

**ToDoList.jsx**
- Maps through the task array and renders each task
- Shows "No tasks available" when the list is empty

**ToDoItem.jsx**
- Displays individual task details
- Contains buttons for completing, editing, and deleting tasks
- Changes background color based on completion status

**Modal.jsx**
- Rendered using React Portals for better DOM structure
- Allows editing task names with a controlled input
- Closes automatically after saving changes


### Key Functions

- `handleClick()` - Adds a new task to the list
- `handleDelete(id)` - Removes a task by filtering it out
- `handleEdit(id)` - Opens the modal with the selected task
- `EditTaskName(id, newTaskName)` - Updates the task name and closes modal
- `handleCompleted(id)` - Toggles the completion status of a task

## Repository

[https://github.com/hrishihrishi/React-task-manager](https://github.com/hrishihrishi/React-task-manager)

---

Built with React by Hrishi
