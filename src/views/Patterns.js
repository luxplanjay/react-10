import React from 'react';
import MyComponent from '../components/MyComponent';
import Toggler from '../components/Toggler';
import Posts from '../components/Posts';

const Patterns = () => (
  <>
    <Toggler>
      {({ isOpen, onToggle }) => (
        <>
          <button type="button" onClick={onToggle}>
            {isOpen ? 'Hide' : 'Show'}
          </button>

          {isOpen && <MyComponent a="a" b="b" c="c" />}
        </>
      )}
    </Toggler>

    <Toggler>
      {({ isOpen, onToggle }) => (
        <>
          <label>
            <input type="checkbox" checked={isOpen} onChange={onToggle} />
            {isOpen ? 'Hide' : 'Show'}
          </label>

          {isOpen && <MyComponent a="a" b="b" c="c" />}
        </>
      )}
    </Toggler>

    {/* <Posts /> */}
  </>
);

export default Patterns;
