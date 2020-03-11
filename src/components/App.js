import React from 'react';
import Layout from './Layout';
import TaskList from './TaskList';
import TaskEditor from './TaskEditor';
import Filter from './Filter';

export default function App({ onIncrement, counterValue, isLoadingTasks }) {
  return (
    <Layout>
      <button type="button" onClick={() => onIncrement(5)}>
        Counter value: {counterValue}
      </button>
      <hr />
      {/* {isLoadingTasks && <h1>LOADING STUFF...</h1>} */}
      <TaskEditor />
      <Filter />
      <TaskList />
    </Layout>
  );
}
