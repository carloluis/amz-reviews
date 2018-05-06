import React from 'react';
import PropTypes from 'prop-types';
import styles from './Search.scss';

class Search extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.props.onUpdateSearch(event.target.value);
    }
    render() {
        return (
            <div className={styles.container}>
                <input
                    className={styles.search}
                    onChange={this.handleChange}
                    value={this.props.value}
                    placeholder="Search"
                    type="text"
                />
            </div>
        );
    }
}

Search.propTypes = {
    onUpdateSearch: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
};

export default Search;
