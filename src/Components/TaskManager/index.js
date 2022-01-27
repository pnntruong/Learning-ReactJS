import React from 'react';
import Header from './Header';
import TaskList from './TaskList';

const TaskManager = () => {
    return (
        <div className='flex flex-col p-3 max-h-screen'>
            <Header/>
            <TaskList />
        </div>
    );
};

export default TaskManager;