# Todo List App

A modern, feature-rich todo list application built with vanilla JavaScript, Webpack, and local storage persistence.

## Features

- ✅ Create and manage multiple projects
- 📝 Add todos with title, description, due date, and priority levels
- 🎯 Expand todos to view and edit detailed information
- 🗑️ Delete todos and projects
- 💾 Automatic data persistence using localStorage
- 📱 Responsive design inspired by popular todo apps
- 🎨 Clean, intuitive user interface

## Todo Properties

Each todo item includes:
- **Title**: Brief description of the task
- **Description**: Detailed information about the task
- **Due Date**: When the task should be completed
- **Priority**: High, Medium, or Low priority levels
- **Notes**: Additional notes or comments
- **Checklist**: Sub-tasks that can be checked off
- **Completion Status**: Track if the todo is completed

## Project Structure

```
todo-app/
├── src/
│   ├── modules/
│   │   ├── todo.js          # Todo class and factory functions
│   │   ├── project.js       # Project management logic
│   │   ├── storage.js       # localStorage functionality
│   │   └── dom.js           # DOM manipulation and UI logic
│   ├── styles/
│   │   └── style.css        # Application styles
│   └── index.js             # Main application entry point
├── dist/                    # Built files (generated)
├── package.json
├── webpack.config.js
└── README.md
```

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd todo-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Usage

### Creating Projects
- Click "New Project" to create a new project
- All todos are organized within projects
- A default "General" project is created automatically

### Managing Todos
- Click "Add Todo" to create a new todo item
- Set title, description, due date, and priority
- Click on any todo to expand and edit details
- Use the delete button to remove todos

### Data Persistence
- All data is automatically saved to localStorage
- Your todos and projects persist between browser sessions
- Data is tied to your specific browser and device

## Dependencies

- **date-fns**: Date formatting and manipulation
- **Webpack**: Module bundling and development server
- **CSS Loader & Style Loader**: CSS processing
- **HTML Webpack Plugin**: HTML file generation

## Browser Support

Modern browsers with ES6+ support and localStorage API.

## Development

### Available Scripts

- `npm run dev` - Start development server with hot reloading
- `npm run build` - Create production build
- `npm run watch` - Build and watch for changes

### Adding Features

The modular architecture makes it easy to add new features:

1. **Application Logic**: Add new methods to `todo.js` or `project.js`
2. **UI Components**: Update `dom.js` with new interface elements
3. **Styling**: Modify `style.css` for visual changes
4. **Data Persistence**: Extend `storage.js` for additional storage needs

## License

MIT License - feel free to use this project for learning and development.
