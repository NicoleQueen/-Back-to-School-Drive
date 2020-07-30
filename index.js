fetch('http://localhost:3000/schools')
.then(res => res.json())
.then(json => json.forEach(school => {showSchools(school)}))

const donationFetch = () => {
    fetch('http://localhost:3000/donations')
    .then(res => res.json())
    .then(json => json.forEach(donation => {schoolDonations(donation)}))
}

const fetchSupplies = () => {
fetch('http://localhost:3000/supplies')
.then(res => res.json())
.then(json => json.forEach(supply => {schoolSupplies(supply)}))
}

const showSchools = (school) => {
    // console.log(school)
    let navBar = document.getElementById('School-Menu')
    let ul = navBar.querySelector('ul')
    let li = document.createElement('li')
    li.textContent = school.name
    ul.appendChild(li)
    li.addEventListener('click', (e) => schoolPage(e, school))
}


const schoolPage = (e, school) => {
    let div = document.querySelector('.main-div')
    div.id = school.name
    div.innerHTML = ''
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
    <h3>Thank you to all that have donated! Your generosity has imh5roved the educational experience for our students.</h3>
    ` 
    
    let form = document.querySelector('#supplies-needed')
    form.addEventListener('submit', (e) => DonateSupplies(e, school))
   

    donationFetch()
    fetchSupplies()
}

const schoolSupplies = (e, supply) => {
    let supplyUL = document.getElementById('supplies')
    let li = document.createElement('li')
    let div = document.querySelector('.main-div')
    console.log(supply)
     if (div.id === supply.school_name){
        li.textContent = `${supply.amount} ${supply.supply}`
        supplyUL.appendChild(li)
   
     }
    //  let form = document.querySelector('supplies-needed')
    //  form.addEventListener('submit', (e) => schoolSupplies(e))
    //  console.log(e.target)

    }

const schoolDonations = (donation) => {
    // console.log(donations.amount)
    let form = document.querySelector('form')
    
    let div = document.createElement('div')
    div.id = 'donated'
    div.innerHTML = `
    ${donation.user_name} donated ${donation.amount} ${donation.supply_name}
    `
    form.after(div)
    let menu = document.querySelector('.main-div')
    // console.log(menu)
}

const DonateSupplies = (e) => {
    e.preventDefault()
console.log(e.target.name.value)
console.log(e.target.supply.value)
console.log(e.target.amount.value)

let ulDonate = document.createElement('donation')
let ul = document.querySelector('#supplies')
donate.innerText = e.target.name.value
donate.innerText = e.target.supply.value
donate.innerText = e.target.amount.value
ul.appendChild(donate)
console.log(donate)
}