

function generateIntern({name, role, id, email, school}) {
return `
<div class="card text-white bg-success mb-3" style="max-width: 18rem;">
    <div class="card-header">${name}</div>
    <div class="card-body">
      <h5 class="card-title">${role}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <ul class="list-group list-group-flush">
      <li class="list-group-item bg-success">ID:  ${id}</li>
      <li class="list-group-item bg-success">Email:  ${email}</li>
      <li class="list-group-item bg-success">College/Univ:  ${school}</li>
    </ul>
    </div>
  </div> `
}

module.exports = generateIntern;