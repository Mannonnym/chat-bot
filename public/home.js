const error = document.getElementsByClassName("errorr")[0];
error.style.display = "none";

document.addEventListener(
  "click",
  function () {
    error.style.display = "block";
  },
  { once: true }
);

const sendElement = document.getElementsByClassName("send").item(0);
sendElement.addEventListener("click", async () => {
  const text = document.getElementsByClassName("text3").item(0).value;

  try {
    const response = await axios.post("/chat", { text });
    const msg = response.data.message;

    
    console.log(msg);
    
    localStorage.setItem("messages", JSON.stringify([msg]));
    window.location.href = "chat.html";

    
  } catch (error) {
    alert(error);
  }
});