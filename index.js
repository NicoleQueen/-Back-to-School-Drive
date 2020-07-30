fetch("http://localhost:3000/schools")
  .then((res) => res.json())
  .then((json) =>
    json.forEach((school) => {
      showSchools(school);
    })
  );


const donationFetch = () => {
    fetch('http://localhost:3000/donations?school_id=1')
    // everything after the ? is included in the params (now have access to school_id)
    .then(res => res.json())
    .then(json => json.forEach(donation => {schoolDonations(donation)}))
}

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
    <p> Supplies needed for upcoming school year </p>
    <div>
        <ul id='supplies'>
        </ul>
    </div>
    <form id='supplies-needed'>
        <label>Name</label>
        <input type='text' name='name'>
        <label>Supply</label>
        <input type='text' name='supply'>
        <label>Amount</label>
        <input type='number' name='amount'>
        <br>
        <input type="submit" value="Submit">
    </form>
    <h3 id = "thanks">Thank you to all that have donated! Your generosity has improved the educational experience for our students.</h3>
    `;

    let form = document.querySelector("#supplies-needed");
    form.addEventListener("submit", (e) => DonateSupplies(e, school));

    donationFetch()
    fetchSupplies()
}

const schoolSupplies = (e, supply) => {
    let supplyUL = document.getElementById("supplies");
    let li = document.createElement("li");
    li.id = supply.school_name
    let div = document.querySelector(".main-div");
    if (div.id === supply.school_name) {
        li.textContent = `${supply.amount} ${supply.supply}`;
        supplyUL.appendChild(li);
    }
};

const schoolDonations = (donation) => {
    let menu = document.querySelector('.main-div')
    let div = document.createElement('div')
    div.id = 'donated'
    div.innerHTML = `
    ${donation.user_name} donated ${donation.amount} ${donation.supply_name}
    `
    menu.appendChild(div)

    let ulDonate = document.createElement('donation')
    let ul = document.querySelector('#supplies')
    donate.innerText = e.target.name.value
    donate.innerText = e.target.supply.value
    donate.innerText = e.target.amount.value
    ul.appendChild(donate)
    console.log(donate)

};
//added code to our fetch (look at it above^)

let headerFirst = document.querySelector("header");
let home = headerFirst.querySelector("h1");
//click title "Back To School Drive", will back to home page
home.addEventListener("click", (e) => showHomePage());

