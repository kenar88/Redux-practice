import React, { Component } from 'react';
import {connect} from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component { 

    render () {
        return (
            <div>
                <AddPerson addPrsn={this.props.personAdded} />
                {this.props.prsn.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age}
                        clicked={() => this.props.personDelete(person.id)} 
                        />
                ))}                
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        prsn: state.persons
    };    
}

const mapDispatchToProps = dispatch => {
    return {
        personAdded:() => dispatch( { type: 'ADD_PERSON' } ),
        personDelete:(id) => dispatch( { type: 'DELETE_PERSON', personId: id } )
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);