# Task Management Backend API

A robust REST API built with Express.js and MongoDB that provides comprehensive task and category management functionality. This API allows for creating, reading, updating, and deleting tasks and categories, with additional features like task completion tracking and due date management.

## Features

### Category Management

- Create new categories
- Retrieve all categories
- Delete specific categories

### Task Management

- Create new tasks
- Retrieve all tasks
- Update task details
- Mark tasks as complete/incomplete
- Update task due dates
- Delete tasks

## Technologies Used

- **Node.js**: Runtime environment
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling tool
- **REST API**: Architecture style

## API Endpoints

### Categories API (`/api/v1/category`)

Base URL: `/api/v1/category`

- `POST /create`: Create a new category
- `GET /`: Retrieve all categories
- `DELETE /:id`: Delete a specific category

### Campaigns API (`/api/v1/tasks`)

Base URL: `/api/v1/tasks`

- `POST /create`: Create a new task
- `GET /`: Retrieve all tasks
- `PATCH  /complete/:id`: Toggle task completion status
- `PATCH  /date/:id`: Update task due date
- `PATCH  /:id`: Update task details
- `DELETE /:id`: Delete a specific task

## Getting Started

### Prerequisites

- Node.js installed on your machine
- [Node.js](https://nodejs.org/) (v14 or later)
- MongoDB

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Ajoy-paul11/Task-Management-Backend.git
   ```
2. Navigate to the project
   ```sh
   cd Task-Management-Backend
   ```
3. Install NPM package
   ```sh
   npm install
   ```
4. Run development server
   ```sh
   npm run dev
   ```

## API Usage Examples

**Create a Category** - POST /api/v1/category/add

Content-Type: application/json

```sh
 {
  "name": "Work",
  "description": "Work-related tasks"
 }
```

**Create a Task** - POST /api/v1/tasks/create

Content-Type: application/json

```sh
 {
 "title": "Complete Project Documentation",
 "description": "Write detailed documentation for the API",
 "categoryId": "category_id_here",
 "dueDate": "2024-12-01",
 "priority": "high"
 }
```

**Update Task Due Date** - PATCH /api/v1/tasks/date/:taskId

Content-Type: application/json

```sh
 {
 "dueDate": "2024-12-15"
 }
```

## Contact

---

<p align="left"> <a href="https://twitter.com/ajoy_paul11" target="blank"><img src="https://img.shields.io/twitter/follow/ajoy_paul11?logo=twitter&style=for-the-badge" alt="ajoy_paul11" /></a> </p>

<a href="https://linkedin.com/in/ajoypaul" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="ajoypaul" height="30" width="40" /></a>
