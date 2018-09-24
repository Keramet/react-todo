import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filter } from '../constant';
import changeFilter from '../actions/changeFilter';

const Filter = ({ filterBy, onChangeFilter }) => {
	const onClick = (e) => {
		e.preventDefault();
		onChangeFilter(e.target.text);
	};

	return (
		<p>
			Filtered By: {'  | '}
			{Object.keys(filter).map(k =>
				<span key={k}>
					<a href="#" className={k === filterBy ? 'filtered' : null} onClick={onClick}>
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
	onChangeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	filterBy: state.filter
});

// const mapDispatchToProps = dispatch => ({
// 	onChangeFilter: newFilter => dispatch(changeFilter(newFilter)),
// });

const mapDispatchToProps = {
	onChangeFilter: newFilter => changeFilter(newFilter),
};


export default connect(mapStateToProps, mapDispatchToProps)(Filter);