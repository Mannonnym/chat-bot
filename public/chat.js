const chatBox = document.getElementById("chat-box");
const input = document.querySelector(".text3");
const sendBtn = document.querySelector(".send");

function addMessage(sender, text) {
  const p = document.createElement("p");
  p.innerHTML = `<b>${sender}:</b> ${text}`;
  chatBox.appendChild(p);
  chatBox.scrollTop = chatBox.scrollHeight;
}

sendBtn.addEventListener("click", async () => {
  const text = input.value.trim();
  if (!text) return;

  addMessage("You", text);

  try {
    const response = await axios.post("/chat", { text });
    addMessage("Bot", response.data.message);
  } catch (err) {
    addMessage("Bot", "⚠️ Server not responding.");
  }

  input.value = "";
});

