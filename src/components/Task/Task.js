import React from 'react';
import PropTypes from 'prop-types';

export default function Task({ task: { id, title, state }, onArchiveTask, onPinTask }) {
  return (
    <div className={`list-item ${state}`}>
      <label className="checkbox" htmlFor="inputId">
        <input
          id="inputId"
          type="checkbox"
          defaultChecked={state === 'TASK_ARCHIVED'}
          disabled
          name="checked"
        />
        <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
      </label>
      <div className="title">
        <input type="text" value={title} readOnly placeholder="Input title" />
      </div>

      <div className="actions" onClick={(event) => event.stopPropagation()} aria-hidden="true">
        {state !== 'TASK_ARCHIVED' && (
          <span onClick={() => onPinTask(id)} aria-hidden="true">
            <span className="icon-star" />
          </span>
        )}
      </div>
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  onArchiveTask: PropTypes.func,
  onPinTask: PropTypes.func,
};

Task.defaultProps = {
  task: null,
  onArchiveTask: () => {},
  onPinTask: () => {},
};
