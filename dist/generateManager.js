
function generateManager({name, role, id, email, office_number}) {
  return `

  <div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
  <div class="card-header">${name}</div>
  <div class="card-body">
    <h5 class="card-title">${role}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <ul class="list-group list-group-flush">
      <li class="list-group-item bg-danger">ID:  ${id}</li>
      <li class="list-group-item bg-danger">Email:  ${email}</li>
      <li class="list-group-item bg-danger">Office Number:  ${office_number}</li>
    </ul>
  </div>
  </div> `
}

module.exports = generateManager;