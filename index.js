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
    <h3 id = "thanks">Thank you to all that have donated! Your generosity has imh5roved the educational experience for our students.</h3>
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
};
//added code to our fetch (look at it above^)

let headerFirst = document.querySelector("header");
let home = headerFirst.querySelector("h1");
//click title "Back To School Drive", will back to home page
home.addEventListener("click", (e) => showHomePage());


let ulDonate = document.createElement('donation')
let ul = document.querySelector('#supplies')
donate.innerText = e.target.name.value
donate.innerText = e.target.supply.value
donate.innerText = e.target.amount.value
ul.appendChild(donate)
console.log(donate)
}
const showHomePage = () => {
  let aside = document.querySelector("aside");
  aside.innerHTML = ``;
  aside.innerHTML = `
    <h2>GREETING PLACEHOLDER</h2>
    <div id="greeting">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTi1ldbOOBs4jgq4OkQpog6aqKX_FR0UrwWGg&usqp=CAU"
      />
    </div>
    <p>
      Thank you for joining us for our 2020 back to school drive! To
      ensure our students have the necessary tools needed to succeed this
      school year, we are asking for your help. Each school has put
      togeather a list of items needed for this upcoming school year.
      Please navigate to your childs to take a look at supplies that are
      currently in need.
    </p>
    `;
};

const DonateSupplies = (e) => {
  e.preventDefault();
  console.log(e.target.name.value);
  console.log(e.target.supply.value);
  console.log(e.target.amount.value);
};
