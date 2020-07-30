fetch("http://localhost:3000/schools")
  .then(res => res.json())
  .then(json => json.forEach(school => {showSchools(school)})
  );

const donationFetch = (school) => {
 fetch(`http://localhost:3000/donations?school_id=${school.id}`)
    // everything after the ? is included in the params (now have access to school_id)
    .then(res => res.json())
    .then(json => json.forEach(donation => {schoolDonations(donation)}))
}

const fetchSupplies = () => {
  fetch("http://localhost:3000/supplies")
    .then(res => res.json())
    .then(json => json.forEach(supply => {schoolSupplies(supply)}));
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
  console.log(e.target.className)
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
    <form id='monetary-donations'>
        <label>Name</label>
        <input type='text' name='name'>
        <label>Dollar Amount</label>
        <input type='number' name='amount'>
        <br>
        <input type="submit" value="Submit">
    </form>
    <h3 id = "thanks">Thank you to all that have donated! Your generosity has improved the educational experience for our students.</h3>
    <div>
        <ul id='donated'>
        </ul>
    </div>
    `;

    let form = document.querySelector("#supplies-needed");
    form.addEventListener("submit", (e) => donateSupplies(e, school));

    let monetary = document.querySelector('#monetary-donations')
    monetary.addEventListener('submit', (e) => financialDonation(e, school))

    donationFetch(school)
    fetchSupplies()
}

const schoolSupplies = (supply) => {
    console.log(supply)
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

}
    
//added code to our fetch (look at it above^)

const donateSupplies = (e, school) => {
    e.preventDefault()
    // console.log(e.target)
    let ulDonate = document.querySelector('#donated')
    let li = document.createElement('li')
    // ${donation.user_name} donated ${donation.amount} ${donation.supply_name}
    li.innerHTML = `${e.target.name.value} donated ${e.target.amount.value} ${e.target.supply.value}`
    ulDonate.appendChild(li)
   let data = { supply: e.target.supply.value, amount: e.target.amount.value, school_id: school.id}
     // console.log(ulDonate)
     fetch('http://localhost:3000/supplies', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(json => console.log(json))

    let ul = document.querySelector('#donated')
    let li = document.createElement('li')
    li.textContent = `${donation.user_name} donated ${donation.amount} ${donation.supply_name}`
    ul.appendChild(li)

    // let donate = document.createElement('li')
    // let ul = document.querySelector('#supplies')

    // donate.innerText = e.target.name.value
    // donate.innerText = e.target.supply.value
    // donate.innerText = e.target.amount.value
    // ul.appendChild(donate)
};
//added code to our fetch (look at it above^)

const financialDonation = (e, school) => {
    e.preventDefault 

}

let headerFirst = document.querySelector("header");
let home = headerFirst.querySelector("h1");
//click title "Back To School Drive", will back to home page
home.addEventListener("click", (e) => showHomePage());

const DeletedonateSupplies = () => {
    fetch('http://localhost:3000/supplies'),
    let currentDonatedSupplies = document.querySelector('li')
    currentDonatedSupplies.innerHTML = ''

    const 
}