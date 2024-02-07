import React, {useState,useEffect} from "react";
import NavBar from "../navbar/navbar";
import "../Index/index1.css";



function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");
      if (!response.ok) {
        throw new Error("Failed to fetch todos");
      }
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
      
    <div className="home-page">
        <>
<NavBar/>
</>
      <header className="hero-section">
      <h1>Your Todo List</h1>
        <p>Keep track of your tasks and stay organized.</p>
      </header>

      <div className="todo-container">
      <h1>Todos</h1>
      <div className="post-item ">
        {todos.map((todo) => (
          <div key={todo.id} className="post-item">
            <h3>{todo.title}</h3>
            <p>Status: {todo.completed ? "Completed" : "Not Completed"}</p>
          </div>
        ))}
      </div>
    </div>

    <header className="hero-section">
          <h1>Welcome to Your Website</h1>
          <p>Your catchphrase or a brief description of what your website offers.</p>
          <a href="#features" className="cta-button">Explore More</a>
        </header>
  
        <section id="features" className="features-section">
          <div className="feature">
            <h2>Feature 1</h2>
            <p>Highlight the first key feature of your website.</p>
          </div>
  
          <div className="feature">
            <h2>Feature 2</h2>
            <p>Describe the second important feature that sets you apart.</p>
          </div>
  
          <div className="feature">
            <h2>Feature 3</h2>
            <p>Introduce the third key feature that users will find valuable.</p>
          </div>
        </section>
  
        <section className="call-to-action">
          <h2>Ready to get started?</h2>
          <p>Join us now and experience the benefits.</p>
          <a href="#signup" className="cta-button">Sign Up</a>
        </section>
  
        <footer className="footer-section">
          <p>&copy; 2024 Your Company | Privacy Policy | Terms of Service</p>
        </footer>
      </div>

      
    );
  }

    
  


export default Todos;
