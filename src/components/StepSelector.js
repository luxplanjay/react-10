import React from 'react';
import { connect } from 'react-redux';
import timerActions from '../redux/timer/timerActions';

const styles = {
  label: { display: 'block', textAlign: 'center' },
  select: { width: 80, font: 'inherit' },
};

const StepSelector = ({ options, step, onChangeStep }) => (
  <label style={styles.label}>
    Select step:
    <select
      style={styles.select}
      value={step}
      onChange={event => onChangeStep(event.target.value)}
    >
      {options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </label>
);

const mapStateToProps = state => {
  return {
    step: state.timer.step,
  };
};

const mapDispatchToProps = {
  onChangeStep: timerActions.changeStep,
};

export default connect(mapStateToProps, mapDispatchToProps)(StepSelector);
