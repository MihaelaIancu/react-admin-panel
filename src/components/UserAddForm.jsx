import React from 'react';
import './UserAddForm.css';
// import {debounce} from 'lodash';

class UserAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            salary: '',
            photo: '',
            isGoldClient: false
        };
    }

    updateName(event) {
        this.setState({name: event.target.value});
    }

    updateEmail(event) {
        // console.log(event.target.value);
        this.setState({email: event.target.value});
    }

    updateSalary(event) {
        this.setState({salary: event.target.value});
    }

    updatePhoto(event) {
        this.setState({photo: event.target.value});
    }

    updateIsGoldClient(event) {
        this.setState({isGoldClient: event.target.checked});
    }

    render() {
        const {name, email, salary, photo, isGoldClient} = this.state;

        return (
            <form
                className="user-add-form"
                onSubmit={(event) => this.props.submitAddForm(event, name, email, salary, photo, isGoldClient)}
            >
                <h2>Adauga utilizatori:</h2>
                {/* <label htmlFor="name">Nume:</label> */}
                <input
                    placeholder='Nume'
                    type="text"
                    name="name"
                    required = {true}
                    onChange={(event) => this.updateName(event)}
                />
                {/* <label htmlFor="email">Email:</label> */}
                <input
                    placeholder='Email'
                    type="email"
                    name="email"
                    required = {true}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
                    onChange={(event) => 
                        this.updateEmail(event)  
                    }
                />
                {/* <label htmlFor="salary">Salary:</label> */}
                <input
                    placeholder='Salariu'
                    type="number"
                    name="salary"
                    onChange={(event) => this.updateSalary(event)}
                />
                {/* <label htmlFor="photo">Profile:</label> */}
                <input
                    placeholder='URL-ul unei poze care te reprezinta...'
                    type="text"
                    name="photo"
                    onChange={(event) => this.updatePhoto(event)}
                />
                <div id="check">
                    <label htmlFor="is-gold-client" >Client GOLD</label>
                    <input
                        type="checkbox"
                        name="is-gold-client"
                        value="true"
                        onChange={(event) => this.updateIsGoldClient(event)}
                    />
                </div>
                <input id="submit" type="submit" value="Introdu utilizatorul"/>
            </form>
        )
    }
}

export default UserAddForm;