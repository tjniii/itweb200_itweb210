const { useState, useEffect } = React;

function App() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = () => {
    fetch("http://localhost:3000")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setMessages(data);
      })
      .catch((error) => {
        console.error("There was a problem fetching messages:", error);
      });
  };

  const sendMessage = () => {
    fetch("http://localhost:3000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: newMessage }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        setNewMessage("");
        fetchMessages();
      })
      .catch((error) => {
        console.error("There was a problem sending the message:", error);
      });
  };

  const deleteMessage = (messageId) => {
    fetch(`http://localhost:3000/messages/${messageId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        fetchMessages();
      })
      .catch((error) => {
        console.error("There was a problem deleting the message:", error);
      });
  };

  const editMessage = (messageId, currentMessage) => {
    const updatedMessage = prompt("Edit message:", currentMessage);
    if (updatedMessage !== null) {
      fetch(`http://localhost:3000/messages/${messageId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: updatedMessage }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          fetchMessages();
        })
        .catch((error) => {
          console.error("There was a problem updating the message:", error);
        });
    }
  };

  return (
    <div>
      <h2>Message Board</h2>
      <div className="new-message-wrapper">
        <textarea
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message here..."
        ></textarea>
        <button className="sendBtn" onClick={sendMessage}>
          Send
        </button>
      </div>
      <div id="message-list">
        {messages.map((message) => (
          <div key={message._id} className="message-item">
            <div className="message-content">{message.message}</div>
            <div className="message-actions">
              <button
                className="action-btn"
                onClick={() => editMessage(message._id, message.message)}
              >
                Edit
              </button>
              <button
                className="action-btn"
                onClick={() => deleteMessage(message._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
