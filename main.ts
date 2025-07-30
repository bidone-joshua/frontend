async function fetchMessage() {
  try {
    const response = await fetch("http://134.33.248.254/hello");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const text = await response.text(); // or response.json() if it's JSON
    const messageDiv = document.getElementById("message");
    if (messageDiv) {
      messageDiv.textContent = text;
    }
  } catch (error) {
    console.error("Error fetching message:", error);
    const messageDiv = document.getElementById("message");
    if (messageDiv) {
      messageDiv.textContent = "Failed to fetch message.";
    }
  }
}

fetchMessage();