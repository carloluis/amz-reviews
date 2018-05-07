import React from 'react';
import PropTypes from 'prop-types';
import styles from './ErrorBoundary.scss';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            info: ''
        };
    }
    componentDidCatch(error, info) {
        this.setState({
            error: error.message,
            info
        });
    }
    render() {
        if (this.state.error) {
            return (
                <div className={styles.container}>
                    <h2>Something went wrong!</h2>
                    <details>
                        {this.state.error}
                        <br />
                        {this.state.info.componentStack}
                    </details>
                </div>
            );
        }

        return this.props.children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired
};

export default ErrorBoundary;
