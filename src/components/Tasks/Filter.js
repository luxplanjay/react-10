import React from 'react';

export default function Filter({ value, onChangeFilter }) {
  return (
    <div>
      <input
        type="text"
        className="TaskEditor-input"
        value={value}
        onChange={e => onChangeFilter(e.target.value)}
      />
    </div>
  );
}
