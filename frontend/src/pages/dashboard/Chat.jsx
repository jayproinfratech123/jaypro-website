import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import { Send } from "lucide-react";
import { useAuth } from "../../context/AuthContext.jsx";

const Chat = () => {
  const { user } = useAuth();
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const socketRef = useRef(null);
  const room = `support:${user?.id}`;

  useEffect(() => {
    socketRef.current = io("/", { path: "/socket.io" });
    socketRef.current.emit("chat:join", room);
    socketRef.current.on("chat:message", (msg) => setMessages((prev) => [...prev, msg]));
    return () => socketRef.current.disconnect();
  }, [room]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    const message = { text, sender: user?.name, at: new Date().toISOString() };
    socketRef.current.emit("chat:message", { room, message });
    setMessages((prev) => [...prev, message]);
    setText("");
  };

  return (
    <div>
      <h1 className="mb-6 font-display text-2xl font-bold text-blueprint-900">Chat & Support</h1>
      <div className="flex h-[60vh] flex-col rounded-sm border border-black/5 bg-white">
        <div className="flex-1 space-y-3 overflow-y-auto p-5">
          {messages.length === 0 && <p className="text-sm text-charcoal/50">Start a conversation with our team.</p>}
          {messages.map((m, i) => (
            <div key={i} className="max-w-xs rounded-sm bg-concrete-100 px-4 py-2 text-sm">
              <p className="font-medium text-blueprint-900">{m.sender}</p>
              <p className="text-charcoal/70">{m.text}</p>
            </div>
          ))}
        </div>
        <form onSubmit={sendMessage} className="flex gap-2 border-t border-black/5 p-4">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 rounded-sm border border-black/10 px-3 py-2 text-sm"
          />
          <button type="submit" className="btn-primary !px-4"><Send className="h-4 w-4" /></button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
