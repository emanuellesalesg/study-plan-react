## Task List - Study Application

This is a simple task list application developed in React, created to practice the use of reducers and state management.

### Features

- Add new tasks to the list.
- Edit the text of existing tasks.
- Mark tasks as completed.
- Delete tasks from the list.

### Code Structure

- **reducers/listReducer.ts**: Contains the reducer responsible for managing the state of the task list.
- **types/Item.ts**: Defines the data structure of an item in the task list.
- **Page.tsx**: Main component of the application, where the user interface is rendered.

#### Action Types

There are four types of actions that can be dispatched to update the state of the list:

- **Add Item**
- **Edit Item**
- **Toggle Edit**
- **Remove Item**

#### List Reducer

The `listReducer` is responsible for processing these actions and updating the state of the list.

#### Page Component

The `Page` component is where the user interface is rendered. It includes functionalities such as adding, editing, marking as completed, and deleting tasks.
