import { createAction } from '@reduxjs/toolkit';

const increment = createAction('counter/increment');

export default { increment };
