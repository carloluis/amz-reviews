import React from 'react';
import PropTypes from 'prop-types';
import Select from '../select/Select';

const ORDERS = ['', 'Asc', 'Desc'];

const OrderBy = ({ value, orderBy }) => <Select onSelect={orderBy} title="Order by" selected={value} values={ORDERS} />;

OrderBy.propTypes = {
    orderBy: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
};

export default OrderBy;
