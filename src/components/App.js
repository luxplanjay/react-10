import React from 'react';
import Layout from './Layout';
import TaskList from './TaskList';
import TaskEditor from './TaskEditor';
import Filter from './Filter';

export default function App() {
  return (
    <Layout>
      <TaskEditor />
      <Filter />
      <TaskList />
    </Layout>
  );
}
