import React from 'react';
import PropTypes from 'prop-types';
import Select from '../select/Select';

const GROUPS = ['', 'Day', 'Week', 'Month'];

const GroupBy = ({ value, groupBy }) => (
    <Select onSelect={groupBy} title="Group by" selected={value} values={GROUPS} disabled={false} />
);

GroupBy.propTypes = {
    groupBy: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
};

export default GroupBy;
