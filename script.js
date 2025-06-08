document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('chat-form');
  const input = document.getElementById('input');
  const chat = document.getElementById('chat');

  const replies = [
    "Hello! I'm the Globocorp Genie. Your wish is my command!",
    "Presto...100 points!",
    "As you wish, noble dreamer.",
    "Genie magic is on it!",
    "Poof! Wish granted (in spirit)."
  ];

  const addMessage = (text, sender) => {
    const msg = document.createElement('div');
    msg.classList.add('message', sender);
    msg.textContent = `${sender === 'user' ? 'YOU' : 'GENIE'}: ${text}`;
    chat.appendChild(msg);
    chat.scrollTop = chat.scrollHeight;
  };

  form.addEventListener('submit', e => {
    e.preventDefault();
    const prompt = input.value.trim();
    if (!prompt) return;

    addMessage(prompt, 'user');
    input.value = '';

    setTimeout(() => {
      const reply = replies[Math.floor(Math.random() * replies.length)];
      addMessage(reply, 'bot');
    }, 500);
  });
});
