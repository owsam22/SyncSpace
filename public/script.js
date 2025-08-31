function scrollToFeature() {
  document.getElementById("features").scrollIntoView({ behavior: "smooth" });
}

function createRoom() {
  alert("Room created! Share your room ID with others.");
}

function joinRoom() {
  const roomId = document.getElementById("roomId").value;
  if (roomId.trim() === "") {
    alert("Please enter a Room ID.");
  } else {
    alert(`Joining room: ${roomId}`);
  }
}
