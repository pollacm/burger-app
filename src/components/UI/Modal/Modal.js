import React, {Component} from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Auxil/Auxil';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Modal] - getSnapshotBeforeUpdate');
        return "1";
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Modal] - componentDidUpdate', prevProps, prevState, snapshot);
    }

    render() {
        return(
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div className={classes.Modal} 
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                        }}>
                    {this.props.children}
                </div>
            </Aux>
        );
    }
}

export default Modal;