import './App.css';
import Card from './components/Card';
import { useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  return (
    <div className="App">
      <h1>Add Author</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Author Name
        </label>
        <br/>
        <input type="text" name="author" />
        <input type="submit" value="Submit" />
      </form>
      <div>
        <h2>Submit History</h2>
        <ul id="history">
        </ul>
      </div>
      <div>
        {/* on button click, return renderItems */}
        <button onClick={fetchData}>Get Users</button>
        
        <h2>Users</h2>
        <div>
          {renderItems(users)}
        </div>
      </div>
    </div>
  );

  function handleSubmit(event) {
    event.preventDefault();
    const author = event.target.elements.author.value;
    const list = document.getElementById('history');
    const li = document.createElement('li');
    li.textContent = author;
    list.appendChild(li);
    event.target.elements.author.value = '';
  }

  function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
      });
  }

  function renderItems(data) {
    return data.map(user => {
      return (
        <Card key={user.id} bg="yellow">
            <div>
              <label htmlFor="a">
                {user.name}
              </label>
            </div>
        </Card>
      )
    })
  }

}

export default App;
