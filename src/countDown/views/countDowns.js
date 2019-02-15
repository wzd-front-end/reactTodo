import React, {Component} from 'react';
import PropTypes from 'prop-types'

import './style.css'

class CountDowns extends Component {
    constructor() {
        super(...arguments);
        this.state = {count: this.props.startCount};
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.count !== this.state.count;
    }

    componentDidMount() {
        this.intervalHandle = setInterval(() => {
            const newCount = this.state.count - 1;
            if (newCount >= 0) {
                this.setState({count: newCount})
            } else {
                window.clearInterval(this.intervalHandle);
            }
        }, 1000);
    }

    componentWillUnmount() {
        if (this.intervalHandle) {
            window.clearInterval(this.intervalHandle);
        }
    }

    render() {
        return this.props.children(this.state.count);
    }
};

CountDowns.propTypes = {
    children: PropTypes.func.isRequired,
    startCount: PropTypes.number.isRequired
}

export default CountDowns;