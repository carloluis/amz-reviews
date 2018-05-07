import React from 'react';
import PropTypes from 'prop-types';
import { classes } from '../../utils';
import styles from './Select.scss';

class Select extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            value: props.selected
        };
        this.toggle = this.toggle.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }
    toggle() {
        if (!this.props.disabled) {
            this.setState(({ open }) => ({ open: !open }));
        }
    }
    handleSelect(event) {
        const value = event.target.dataset.value;
        this.props.onSelect(value);
        this.setState({ open: false, value });
    }
    render() {
        const { selected, title, values, disabled } = this.props;
        const { open, value } = this.state;
        const text = selected || value || title;

        return (
            <div className={classes(styles.container, disabled && styles.disabled)}>
                <div className={styles.input} onClick={this.toggle}>
                    {text} <i className={styles.triangle}>{open ? '▲' : '▼'}</i>
                </div>
                {open && <div className={styles.backdrop} onClick={this.toggle} />}
                {open && (
                    <div className={styles.options}>
                        {values.map(value => (
                            <div key={value} className={styles.option} onClick={this.handleSelect} data-value={value}>
                                {value}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    }
}

Select.propTypes = {
    disabled: PropTypes.bool,
    onSelect: PropTypes.func.isRequired,
    selected: PropTypes.string,
    title: PropTypes.string.isRequired,
    values: PropTypes.arrayOf(PropTypes.string).isRequired
};

Select.defaultProps = {
    disabled: false,
    selected: ''
};

export default Select;
