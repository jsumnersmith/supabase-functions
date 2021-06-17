import React, { useState } from "react";
import "../styles/index.css";


const Index = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // return ( console.log(name, email, message));
    return fetch(`/api/submit-form`, {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        message: message
      })
    }).then(data => data.json())
      .then(() => setSubmitted(true))
  }
  if (submitted) {
    return(
      <div className="container">
        <h2>Supabase Form Submission Example</h2>
        <form>
          <h3>Thanks for your submission</h3>
          <button onClick={()=> setSubmitted(false)}>Try Again</button>
        </form>
         
      </div>
    )
  }
  return (
    <div className="container">
      <h2>Supabase Form Submission Example</h2>
      <form onSubmit={handleSubmit}>
        <label for="name">Name</label>
        <input name="name" placeholder="Your name" onChange={(e) => setName(e.target.value)}/>
        
        <label for="email">Email</label>
        <input name="email" placeholder="you@example.com" onChange={(e) => setEmail(e.target.value)}/>
        
        <label for="message">Message</label>
        <textarea name="message" onChange={(e) => setMessage(e.target.value)}/>
        
        <button type="submit">Submit Form</button>
      </form>
    </div>
  )
};

export default Index;