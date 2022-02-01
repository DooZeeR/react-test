import { useState } from 'react';
import './App.css';



function App() {
  const [posts, setPosts] = useState([]);

  function add() {
    setPosts([...posts,{
      title: "Random",
      postText: "Szöveg4",
      date: "2022.02.04"
    }])
  }

  return (
    <div className="App">
      <h1>Blog Posts</h1>

      <div>
        <input type="text"  placeholder='title'/>
        <input type="text"  placeholder='post'/>
        <button onClick={add}>New Post</button>
        <button onClick={() => {setPosts([])}}>Delete all posts</button>
      </div>

      {posts.map((item) => {
        return (
          <div key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.postText}</p>
            <p>{item.date}</p>
            <input type="text" placeholder='New post title' />
            <input type="text" placeholder='New post text' />
            <button>Update</button>
            <button>Delete</button>
          </div>
        )
      })}
    </div>
  );
}

export default App;
