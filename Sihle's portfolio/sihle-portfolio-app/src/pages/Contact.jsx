import React from 'react'

const Contact = () => {
  return (
    <div className="contacts">
    <h2>Contact Me</h2>
    <p>Feel free to reach out to me via the following channels:</p>
    <ul>
      <li>Email: shlmnyandu@gmail.com</li>
      <li>Phone: +27 67 196 1510</li>
      <li>LinkedIn: <a href="https://www.linkedin.com/in/s-phesihle-mnyandu-789384284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">S'phesihke Mnyandu</a></li>
      <li>Instagram: <a href="https://www.instagram.com/sphesihle_busquets?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">@sphesihle_busquets</a></li>
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



