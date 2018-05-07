import React from 'react';
import PropTypes from 'prop-types';
import { classes } from '../../utils';
import styles from './Select.scss';

class Select extends React.PureComponent {
    constructor(props) {
        super(props);

        this.handleSelect = this.handleSelect.bind(this);
        this.toggle = this.toggle.bind(this);
        this.state = {
            open: false
        };
    }
    toggle() {
        if (!this.props.disabled) {
            this.setState(({ open }) => ({ open: !open }));
        }
    }
    handleSelect(event) {
        const value = event.target.dataset.value;
        this.props.onSelect(value);
        this.toggle();
    }
    render() {
        const { selected, title, values, disabled } = this.props;
        const { open } = this.state;

        return (
            <div className={classes(styles.container, disabled && styles.disabled)}>
                <div className={styles.input} onClick={this.toggle}>
                    {selected || title} <i className={styles.triangle}>{open ? '▲' : '▼'}</i>
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
