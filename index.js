fetch("http://localhost:3000/schools")
  .then((res) => res.json())
  .then((json) =>
    json.forEach((school) => {
      showSchools(school);
    })
  );

const donationFetch = (school) => {
  fetch(`http://localhost:3000/donations?school_id=${school.id}`)
    // everything after the ? is included in the params (now have access to school_id)
    .then((res) => res.json())
    .then((json) =>
      json.forEach((donation) => {
        schoolDonations(donation);
      })
    );
};

const fetchSupplies = () => {
  fetch("http://localhost:3000/supplies")
    .then((res) => res.json())
    .then((json) =>
      json.forEach((supply) => {
        schoolSupplies(supply);
      })
    );
};

const showSchools = (school) => {
  let navBar = document.getElementById("School-Menu");
  let ul = navBar.querySelector("ul");
  let li = document.createElement("li");
  li.className = 'list-group-item"';
  li.textContent = school.name;
  ul.appendChild(li);
  li.addEventListener("click", (e) => schoolPage(e, school));
};

const schoolPage = (e, school) => {
  e.target.className = "list-group-item active";
  let div = document.querySelector(".main-div");
  div.id = school.name;
  div.innerHTML = "";
  div.innerHTML = `
    <h2> ${school.name}</h2>
    <h3> ${school.district} </h3>
    <p id="pp"> Supplies needed for upcoming school year </p>
    <div>
        <ul id='supplies'>
        </ul>
    </div>
    <form id='supplies-needed'>
    <span style="color:DarkSlateGrey">Create a New Supply: </span>
        <label>Name</label>
        <input type='text' name='name'>
        <label>Supply</label>
        <input type='text' name='supply'>
        <label>Amount</label>
        <input type='number' name='amount'>
        <br>
        <input type="submit" value="Submit">
    </form>
    <form id='monetary-donations'>
    <span style="color:DarkSlateGrey">Financial Donation: </span>
        <label>Name</label>
        <input type='text' name='name'>
        <label>Dollar Amount</label>
        <input type='number' name='amount'>
        <br>
        <input type="submit" value="Submit">
    </form>
    <form id='supply-update' name="update_form">
     <span style="color:DarkSlateGrey">Edit a Supply: </span>
        <label>Supply</label>
        <input type='text' name='supply'>
        <label>Amount</label>
        <input type='number' name='amount'>
        <br>
        <input type="submit" value="Submit">
    </form>
    <h3 id = "thanks">Thank you to all that have donated! Your generosity has improved the educational experience for our students.</h3>
    <div>
       <ul id='donated'>
      <button> delete</button>
        </ul>
    </div>

`;
  let form = document.querySelector("#supplies-needed");
  form.addEventListener("submit", (e) => donateSupplies(e, school));
  let monetary = document.querySelector("#monetary-donations");
  monetary.addEventListener("submit", (e) => financialDonation(e, school));
  donationFetch(school);
  fetchSupplies();
};

const schoolSupplies = (supply) => {
  let supplyUL = document.getElementById("supplies");
  let li = document.createElement("li");

  li.id = supply.id;

  let div = document.querySelector(".main-div");
  if (div.id === supply.school_name) {
    // li.textContent = `${supply.amount} ${supply.supply} edit`;
    li.innerHTML = `
       <h4>${supply.amount}  ${supply.supply}</h4>
       <span style="color:coral">edit</span>
    `;
    supplyUL.appendChild(li);
  }
  //update supply: add event listener
  li.addEventListener("click", (e) => fetchOneSupply(supply.id));
};

const schoolDonations = (donation) => {
  let ul = document.querySelector("#donated");
  let li = document.createElement("li");
  if (donation.supply_name === "Dollars") {
    li.textContent = `Thank you ${donation.user_name} for your financial contribution`;
  } else {
    li.textContent = `${donation.user_name} donated ${donation.amount} ${donation.supply_name}`;
  }
  ul.appendChild(li);
};
//added code to our fetch (look at it above^)

const donateSupplies = (e, school) => {
  e.preventDefault();
  let ulDonate = document.querySelector("#donated");
  let li = document.createElement("li");
  li.innerHTML = `${e.target.name.value} donated ${e.target.amount.value} ${e.target.supply.value}`;
  ulDonate.appendChild(li);

  let data = {
    supply: {
      supply: e.target.supply.value,
      amount: e.target.amount.value,
      school_id: school.id,
      name: e.target.name.value,
    },
  };

  fetch("http://localhost:3000/supplies", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());

  li.addEventListener("click", (e) => DeletedonateSupplies());
  console.log(e);
};

const financialDonation = (e, school) => {
  e.preventDefault();
  console.log(e.target.name.value);
  console.log(e.target.amount.value);

  let data = {
    donation: {
      supply: "dollar_amount",
      amount: e.target.amount.value,
      school_id: school.id,
      name: e.target.name.value,
    },
  };

  fetch("http://localhost:3000/donations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((json) => {
      let ul = document.getElementById("donated");
      let li = document.createElement("li");
      li.textContent = `Thank you ${json.user_name} for your financial contribution`;
      ul.appendChild(li);
    });
  // .then(json => console.log(json))
};

let headerFirst = document.querySelector("header");
let home = headerFirst.querySelector("h1");
//click title "Back To School Drive", will back to home page
// home.addEventListener("click", (e) => showHomePage());

//update supply:fetch one supply which need to update
const fetchOneSupply = (id) => {
  fetch(`http://localhost:3000/supplies/${id}`)
    .then((res) => res.json())
    .then((json) => editSupply(json));
};

//updat supply: set origin data to form
const editSupply = (supply) => {
  let form = document.querySelector("#supply-update");
  form.supply.value = supply.supply;
  form.amount.value = supply.amount;
  form.addEventListener("submit", (e) => patchSupply(e, supply));
};

//update supply:patch new data
const patchSupply = (e, item) => {
  e.preventDefault();
  let currentSupply = document.getElementById(`${item.id}`);
  currentSupply.textContent = `${e.target[1].value} ${e.target[0].value}`;
  // currentSupply.innerHTML = `
  //      <h4>${e.target[1].value}  ${e.target[0].value}</h4>
  //      <span style="color:coral">edit</span>
  //   `;
  let data = {
    supply: e.target[0].value,
    amount: e.target[1].value,
  };
  fetch(`http://localhost:3000/supplies/${item.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());

  // document.update_form.reset();
};

const DeletedonateSupplies = (e) => {
  // fetch('http://localhost:3000/supplies'),{
  // method: 'DELETE'
  let currentDonatedSupplies = document.querySelector("li");
  let ulDonate = document.querySelector("#donated");
  console.log(currentDonatedSupplies);
  console.log(ulDonate);
};
