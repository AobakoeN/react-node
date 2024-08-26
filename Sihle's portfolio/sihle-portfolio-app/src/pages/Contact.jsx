import React from 'react'

const Contact = () => {
  return (
    <div className="contacts">
    <h2>Contact Me</h2>
    <p>Feel free to reach out to me via the following channels:</p>
    <ul>
      <li>Email: yourname@example.com</li>
      <li>Phone: +123 456 7890</li>
      <li>LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">yourprofile</a></li>
      <li>Twitter: <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">@yourhandle</a></li>
    </ul>
    <form>
      <h3>Send me a message:</h3>
      <div>
        <label>Name:</label>
        <input type="text" name="name" required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" required />
      </div>
      <div>
        <label>Message:</label>
        <textarea name="message" rows="4" required></textarea>
      </div>
      <button type="submit">Send</button>
    </form>
  </div>
  )
}

export default Contact



