import { useEffect, useState } from 'react';
import { Send } from 'lucide-react';
import api from '../../api/axios';

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  useEffect(() => {
    let active = true;
    const load = async () => {
      try {
        const { data } = await api.get('/chat/messages');
        if (active) setMessages(data.messages);
      } catch { if (active) setError('Unable to load messages. Please try again.'); }
    };
    load();
    const timer = setInterval(load, 10000);
    return () => { active = false; clearInterval(timer); };
  }, []);
  async function send(event) {
    event.preventDefault();
    if (!text.trim() || busy) return;
    setBusy(true); setError('');
    try {
      const { data } = await api.post('/chat/messages', { text: text.trim() });
      setMessages(current => current.some(message => message.id === data.message.id) ? current : [...current, data.message]);
      setText('');
    } catch (err) { setError(err.response?.data?.message || 'Unable to send your message.'); }
    finally { setBusy(false); }
  }
  return <main aria-labelledby="chat-heading">
    <h1 id="chat-heading" className="mb-6 font-display text-2xl font-bold text-blueprint-900">Chat &amp; Support</h1>
    {error && <p role="alert" className="mb-3 text-red-600">{error}</p>}
    <div className="flex h-[60vh] flex-col rounded-sm border border-black/5 bg-white">
      <div className="flex-1 space-y-3 overflow-y-auto p-5" role="log" aria-live="polite">
        {!messages.length && <p className="text-sm text-charcoal/50">Send a message to our team.</p>}
        {messages.map(message => <article key={message.id} className="max-w-xs rounded-sm bg-concrete-100 px-4 py-2 text-sm"><p className="font-medium text-blueprint-900">{message.sender}</p><p className="text-charcoal/70">{message.text}</p></article>)}
      </div>
      <form onSubmit={send} className="flex gap-2 border-t border-black/5 p-4">
        <label htmlFor="chat-message" className="sr-only">Message</label>
        <input id="chat-message" value={text} onChange={event => setText(event.target.value)} maxLength={4000} required placeholder="Type a message..." className="flex-1 rounded-sm border border-black/10 px-3 py-2 text-sm" />
        <button disabled={busy} className="btn-primary !px-4" aria-label="Send message"><Send className="h-4 w-4" /></button>
      </form>
    </div>
  </main>;
}
