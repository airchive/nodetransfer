import React from "react";
import "./app.styles.css";

export default class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      email: "",
      subject: "",
      content: ""
    }
  }

  handleChange = (event: any) => {
    this.setState({
      [event.target.id]: event.target.value
    } as Pick<any, any>);
  }

  handleSubmit = (event: any) => {
    event.preventDefault();

    const payload = {
      email: this.state.email,
      subject: this.state.subject,
      content: this.state.content
    }

    fetch("http://localhost:666/mail", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" }
    });
  }

  render() {
    return (
      <main className="app__form">
      <form 
        onSubmit={(event) => this.handleSubmit(event)}
      >
        <div>
          <h1>Nodetransfer</h1>
        </div>

        <div>
          <label>Email Address</label>
          <br/>
          <input 
            type="text" 
            id="email"
            value={this.state.email} 
            onChange={this.handleChange} 
          />
        </div>

        <br/>

        <div>
          <label>Mail Subject</label>
          <br/>
          <input
            type="text" 
            id="subject"
            value={this.state.subject} 
            onChange={this.handleChange} 
          />
        </div>

        <br/>

        <div>
          <label>Mail Content</label>
          <br/>
          <textarea 
            id="content"
            cols={21}
            rows={7}
            value={this.state.content} 
            onChange={this.handleChange} 
          />
        </div>

        <br/>
      
        <div>
          <button type="submit">Send</button>
        </div>
      </form>
      </main>
    )
  }
}
