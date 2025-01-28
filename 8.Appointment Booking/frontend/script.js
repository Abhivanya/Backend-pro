const form = document.querySelector("form");
const appointmentsDiv = document.querySelector("#appointments");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = e.target.username.value;
  const email = e.target.email.value;
  console.log(username, email);
  postAppointment(username, email);
});

async function postAppointment(username, email) {
  try {
    const response = await fetch("http://localhost:3000/api/appointments", {
      method: "POST",
    });
    if (!response.ok) throw new Error("error while posting ");
  } catch (error) {
    console.log(error);
  }
}

window.onload = () => {};
async function getAppointment() {
  try {
    const response = await fetch("http://localhost:3000/api/appointments");
    if (!response.ok) throw new Error("error while posting ");
    const res = response.json();
    appointmentsDiv.innerHTML = res.map(
      (appointment) => `<div>
            ${appointment.username} ${appointment.email}
        </div>`
    );
  } catch (error) {
    console.log(error);
  }
}
