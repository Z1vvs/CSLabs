console.log(`Support Widget Loaded`);

const btn = document.createElement(`button`);
btn.innerText = `Chat with Support`;
btn.style.position = `fixed`;
btn.style.bottom = `10px`;
btn.style.right = `10px`;
document.body.appendChild(btn);

btn.onclick = () => {
  fetch(`http://localhost:4000/api/messages`)
    .then((res) => res.json())
    .then((data) => alert(`Support says: ` + data.message));
};
