import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({
  name,
  value,
  required = 'false',
  rows = 5,
  handleChange,
}) => {
  return (
    <label htmlFor={name} className="block mt-4">
      <div className="text-sm font-bold tracking-wider text-gray-700 uppercase">
        {name}
      </div>
      <textarea
        id={name}
        name={name}
        value={value}
        required={required}
        rows={rows}
        onChange={handleChange}
        className="w-full h-full px-3 py-2 mt-1 bg-white border-2 rounded-none appearance-none focus:border-teal-600 focus:outline-none"
      />
    </label>
  );
};

TextArea.propTypes = {
  name: PropTypes.string,
  required: PropTypes.bool,
  rows: PropTypes.number,
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

export default TextArea;
