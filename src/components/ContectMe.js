import React ,{useState}from 'react';
import './ContectMe.css'; // Import the CSS file

const ContectMe = () => {
    const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
    const handleSubmit = (e) => {
		e.preventDefault();

		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		var raw = JSON.stringify({
			name: name,
			email: email,
			message: message,
		});

		var requestOptions = {
			method: "POST",
			headers: myHeaders,
			body: raw,
		};

		fetch("https://vercel-test-peach-nine.vercel.app/messageMe", requestOptions)
			.then((result) => {
				console.log(result);
                alert("message sended");
				setName("");
				setEmail("");
				setMessage("");
                 
			})
			.catch((error) => console.log("error", error));
		// Reset form fields
	};
    return (
        <div className="main2">
            <div className="contact-me">
                <div className="contact-info">
                    <div className="contact-item">
                        <span className="icon">📧</span>
                        <div>Email:</div>
                        <div>
                            <a href="mailto:anishkumar3787230@gmail.com">anishkumar3787230@gmail.com</a>
                        </div>
                    </div>
                    <div className="contact-item">
                        <span className="icon">📞</span>
                        <div>Phone:</div>
                        <div>
                            <a href="tel:+916203417361">+91 6203417361</a>
                        </div>
                    </div>
                    <div className="contact-item">
                        <span className="icon">🔗</span>
                        <div>LinkedIn:</div>
                        <div>
                            <a href="https://www.linkedin.com/in/anish-kumar-5b477a23a/" target="_blank" rel="noopener noreferrer">
                                Connect on LinkedIn
                            </a>
                        </div>
                    </div>
                    <div className="contact-item">
                        <span className="icon">📷</span>
                        <div>Instagram:</div>
                        <div>
                            <a href="https://www.instagram.com/yadav_anish_23/" target="_blank" rel="noopener noreferrer">
                                Follow on Instagram
                            </a>
                        </div>
                    </div>
                    <div className="contact-item">
                        <span className="icon">🐱</span>
                        <div>GitHub:</div>
                        <div>
                            <a href="https://github.com/YadavAnish123" target="_blank" rel="noopener noreferrer">
                                Check GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="form-container">
                <h2>Contect-Me</h2>
                <div className="chat-info">
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email"
                                required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea type="text" id="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="type your message..."
                                required/>
                        </div>
                        <button type="submit" onClick={handleSubmit}>Submit</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default ContectMe;
