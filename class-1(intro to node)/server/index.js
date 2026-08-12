const http = require("http");

const myServer = http.createServer((req, res) => {
  console.log(req.url);
  switch (req.url) {
    case "/":
      res.end("This is my Home Page");
      break;
    case "/about":
      res.end("This is my About Page");
      break;
    case "/contact":
      res.end(`<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Contact Us</title>
        </head>
        <body>
        
          <header>
            <h1>Get in Touch</h1>
            <p>Have questions or feedback? We'd love to hear from you.</p>
          </header>
        
          <main>
            <!-- Contact Information Section -->
            <section id="contact-info">
              <h2>Contact Details</h2>
              <ul>
                <li>
                  <strong>Email:</strong> 
                  <a href="mailto:support@example.com">support@example.com</a>
                </li>
                <li>
                  <strong>Phone:</strong> 
                  <a href="tel:+15551234567">+1 (555) 123-4567</a>
                </li>
                <li>
                  <strong>Address:</strong> 
                  123 Innovation Way, Suite 400, San Francisco, CA 94105
                </li>
                <li>
                  <strong>Business Hours:</strong> 
                  Monday – Friday, 9:00 AM – 5:00 PM PST
                </li>
              </ul>
            </section>
        
            <!-- Contact Form Section -->
            <section id="contact-form">
              <h2>Send Us a Message</h2>
              <form action="/submit-contact" method="POST">
                
                <!-- Name Field -->
                <div>
                  <label for="full-name">Full Name *</label>
                  <input 
                    type="text" 
                    id="full-name" 
                    name="fullName" 
                    required 
                    placeholder="Jane Doe"
                    autocomplete="name"
                  >
                </div>
        
                <!-- Email Field -->
                <div>
                  <label for="email">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    placeholder="jane@example.com"
                    autocomplete="email"
                  >
                </div>
        
                <!-- Subject Line Field -->
                <div>
                  <label for="subject">Subject *</label>
                  <select id="subject" name="subject" required>
                    <option value="" disabled selected>Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="billing">Billing & Sales</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>
        
                <!-- Message Field -->
                <div>
                  <label for="message">Message *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="6" 
                    required 
                    placeholder="Type your message here..."
                  ></textarea>
                </div>
        
                <!-- Submit Button -->
                <button type="submit">Send Message</button>
        
              </form>
            </section>
          </main>
        
          <footer>
            <p>&copy; 2026 Your Company Name. All rights reserved.</p>
          </footer>
        
        </body>
        </html>`);
      break;
  }
});

myServer.listen(8001, () => {
  console.log("Server Runnig at port 8001");
});
