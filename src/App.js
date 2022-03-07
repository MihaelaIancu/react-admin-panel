import React from 'react';
import UserList from './components/UserList';
import UserAddForm from './components/UserAddForm';
import './App.css';
import PostList from './components/PostList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      background: 'white',
      colorText: 'black',
      users: [],
      stareButon: null,
      message: 'default list'
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        data = data.filter(user => user.id < 4);
        data.forEach(user => {
          user.isGoldClient = false;
        });
        this.setState({users: data});
      })
  }

  changeColor(event) {
    this.setState({background: event.target.value});
  }

  changeColorText(event) {
    this.setState({colorText: event.target.value});
  }

  changeInfo(event) {
    console.log('click happened');
    this.setState({stareButon: event.target.value});
    this.setState({message: event.target.value});
  }

  getMaxId(users) {
    let maxId = 0;

    users.forEach(user => {
      if (user.id > maxId) {
        maxId = user.id;
      }
    });

    return maxId;
  }

  submitAddForm(event, name, email, salary, photo, isGoldClient) {
    event.preventDefault();
    this.setState(prevState => {
      return {
        users: [
          ...prevState.users,
          {
            id: this.getMaxId(prevState.users) + 1,
            name,
            email,
            salary,
            photo,
            isGoldClient
          }
        ]
      }
    });
  }

  render() {
    return(
      <div className="app" style={{background: this.state.background, color: this.state.colorText}}>
        <h1>Admin panel - Proiectul 1</h1>
        
        <br/>
        <br/>
        <button value="useri" onClick={(event) => this.changeInfo(event)}>Afiseaza useri</button>
        <button value="postari" onClick={(event) => this.changeInfo(event)}>Afiseaza postari</button>
        {
        this.state.stareButon === 'useri' 
          ? <div>
            <UserAddForm submitAddForm={(event, name, email, salary, photo, isGoldClient) => this.submitAddForm(event, name, email, salary, photo, isGoldClient)}/>
            <UserList users={this.state.users}/>
            </div>
          : this.state.stareButon === 'postari'
            ?
              <PostList stareButon={this.state.stareButon}/>
            : <UserList users={this.state.users}/>
        }
        
        <br/>
        <br/>
        <label htmlFor="bg">Background Color</label>
        <input type="color" name="bg" onChange={(event) => this.changeColor(event)}/>
        <br/>
        <label htmlFor="text">Text Color</label>
        <input type="color" name="text" onChange={(event) => this.changeColorText(event)}/>
        <br/>
      </div>
    );
  }
}

export default App;
