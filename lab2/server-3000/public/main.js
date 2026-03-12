document.cookie = `SessionID=123456`;

fetch(`http://localhost:3000/api/emails`)
  .then((res) => res.json())
  .then((emails) => {
    const list = document.getElementById(`email-list`);
    emails.forEach((email) => {
      const li = document.createElement(`li`);
      li.innerText = `${email.from}: ${email.subject}`;
      li.onclick = () => {
        document.getElementById(`email-body`).innerText = email.body;
      };
      list.appendChild(li);
    });
  });
