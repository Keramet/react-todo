import React from 'react';
import PropTypes from 'prop-types';
import { filter } from '../constant';

const Filter = ({ filterBy }) => {
  return (
    <p>
        Filtered By: {'  '}
		{Object.keys(filter).map(k =>
			<span key={k}>
				<a href="#" className={k === filterBy ? 'filtered' : null}>
					{k}
				</a>
				{' | '}
			</span>

		)}
    </p>
  );
};

Filter.propTypes = {
	filterBy: PropTypes.string.isRequired,
};


export default Filter;