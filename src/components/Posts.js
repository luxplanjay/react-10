import React from 'react';
// import withFetch from './hoc/withFetch';
import withToggle from './hoc/withToggle';

const Posts = props => <h1>В моих пропсах будут data, loading и error</h1>;

// export default withFetch('https://jsonplaceholder.typicode.com/todos')(Posts);

export default withToggle(Posts);
