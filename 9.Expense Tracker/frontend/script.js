const form = document.querySelector("form");
const appointmentsDiv = document.querySelector("#appointments");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = e.target.username.value;
  const email = e.target.email.value;
  console.log(username, email);
  // postAppointment(username, email);
});

async function postAppointment(username, email) {
  try {
    const response = await fetch(
      "http://localhost:3000/api/post-appointments",
      {
        method: "POST",
      }
    );
    if (!response.ok) throw new Error("error while posting ");
  } catch (error) {
    console.log(error);
  }
}

window.onload = () => {
  getAppointment();
};
async function getAppointment() {
  try {
    const response = await fetch("http://localhost:3000/api/get-appointments");
    if (!response.ok) throw new Error("error while posting ");
    const res = await response.json();
    res.data.forEach((appointment) => {
      const newEl = document.createElement("div");
      newEl.innerHTML = `${appointment.username}`;
      console.log(newEl);
      appointmentsDiv.appendChild(newEl);
    });
  } catch (error) {
    console.log(error);
  }
}
