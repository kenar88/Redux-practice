import React, { Component } from 'react';
import {connect} from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';

class Counter extends Component {    

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 10" clicked={this.props.onSubstractCounter}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store result</button>
                <ul>
                    {this.props.storedResults.map(strRes => {
                        return <li onClick={() => this.props.onDeleteResult(strRes.id)} key={strRes.id}>{strRes.value}</li>
                    })}                    
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.result
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch( { type: actionTypes.INCREMENT } ),
        onDecrementCounter: () => dispatch( { type: actionTypes.DECREMENT} ),
        onAddCounter: () => dispatch( { type: actionTypes.ADD, val: 5 } ),
        onSubstractCounter: () => dispatch( { type: actionTypes.SUBTRACT, val: 10 } ),
        onStoreResult: (res) => dispatch( { type: actionTypes.STORE_RESULT, result: res } ),
        onDeleteResult: (id) => dispatch( { type: actionTypes.DELETE_RESULT, strResId: id} ),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);