async function createSessionHandler(event) {
  event.preventDefault();

  const response = await fetch("api/instance");
  console.log(response);

  document.location.replace("/");
}

document.querySelector("#create-button").addEventListener("submit", createSessionHandler);