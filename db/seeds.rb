# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


aa1 = Supply.create(supply: "Pencils", amount: 50, school_id: 1)
aa2 = Supply.create(supply: "Notebooks", amount: 30, school_id: 1)
aa3 = Supply.create(supply: "Binders", amount: 10, school_id: 1)
aa4 = Supply.create(supply: "Markers", amount: 20, school_id: 1)
aa5 = Supply.create(supply: "Laptops", amount: 20, school_id: 1)


mu1 = Supply.create(supply: "Pencils", amount: 50, school_id: 2)
mu2 = Supply.create(supply: "Notebooks", amount: 30, school_id: 2)
mu3 = Supply.create(supply: "Binders", amount: 10, school_id: 2)
mu4 = Supply.create(supply: "Markers", amount: 20, school_id: 2)
mu5 = Supply.create(supply: "Tape", amount: 20, school_id: 2)

wv1 = Supply.create(supply: "Pencils", amount: 50, school_id: 3)
wv2 = Supply.create(supply: "Notebooks", amount: 30, school_id: 3)
wv3 = Supply.create(supply: "Binders", amount: 10, school_id: 3)
wv4 = Supply.create(supply: "Markers", amount: 20, school_id: 3)
wv5 = Supply.create(supply: "Hand Sanatizer Bottles", amount: 20, school_id: 3)

tt1 = Supply.create(supply: "Pencils", amount: 50, school_id: 4)
tt2 = Supply.create(supply: "Notebooks", amount: 30, school_id: 4)
tt3 = Supply.create(supply: "Binders", amount: 10, school_id: 4)
tt4 = Supply.create(supply: "Markers", amount: 20, school_id: 4)
tt5 = Supply.create(supply: "Clorox Wipes", amount: 20)

gs1 = Supply.create(supply: "Pencils", amount: 50, school_id: 5)
gs2 = Supply.create(supply: "Notebooks", amount: 30, school_id: 5)
gs3 = Supply.create(supply: "Crayons", amount: 10, school_id: 5)
gs4 = Supply.create(supply: "Folders", amount: 20, school_id: 5)
gs5 = Supply.create(supply: "Flash Cards", amount: 20, school_id: 5)

cd1 = Supply.create(supply: "Pencils", amount: 50, school_id: 6)
cd2 = Supply.create(supply: "Notebooks", amount: 30, school_id: 6)
cd3 = Supply.create(supply: "Binders", amount: 10, school_id: 6)
cd4 = Supply.create(supply: "Markers", amount: 20, school_id: 6)
cd5 = Supply.create(supply: "Erasers", amount: 20, school_id: 6)

we1 = Supply.create(supply: "Pencils", amount: 50, school_id: 7)
we2 = Supply.create(supply: "Notebooks", amount: 30, school_id: 7)
we3 = Supply.create(supply: "Binders", amount: 10, school_id: 7)
we4 = Supply.create(supply: "Markers", amount: 20, school_id: 7)
we5 = Supply.create(supply: "Manual Pencil Sharpeners", amount: 20, school_id: 7)

cc1 = Supply.create(supply: "Pencils", amount: 50, school_id: 8)
cc2 = Supply.create(supply: "Notebooks", amount: 30, school_id: 8)
cc3 = Supply.create(supply: "Binders", amount: 10, school_id: 8)
cc4 = Supply.create(supply: "Markers", amount: 20, school_id: 8)
cc5 = Supply.create(supply: "Pens", amount: 20, school_id: 8)

pp1 = Supply.create(supply: "Backpacks", amount: 50, school_id: 9)
pp2 = Supply.create(supply: "Notebooks", amount: 30, school_id: 9)
pp3 = Supply.create(supply: "Binders", amount: 10, school_id: 9)
pp4 = Supply.create(supply: "Markers", amount: 20, school_id: 9)
pp5 = Supply.create(supply: "Clipboards", amount: 20, school_id: 9)

ew1 = Supply.create(supply: "Pencils", amount: 50, school_id: 10)
ew2 = Supply.create(supply: "Notebooks", amount: 30, school_id: 10)
ew3 = Supply.create(supply: "Binders", amount: 10, school_id: 10)
ew4 = Supply.create(supply: "Markers", amount: 20, school_id: 10)
ew5 = Supply.create(supply: "Staplers", amount: 20, school_id: 10)



acceleratedAcademy = School.create(name:"Accelerated Academy", district:"Seattle", description:"High school")
meadowsUniversity= School.create(name:"Meadows University", district:"San Francisco", description:"University")
westviewKindergarten= School.create(name:"Westview Kindergarten", district:"San Francisco", description:"Preschool")
tulipTree= School.create(name:"Tulip Tree", district:"San Francisco", description:"High school")
greenSprout= School.create(name:"Green Sprout", district:"Seattle", description:"High school")
countryDaySchool= School.create(name:"Country Day School", district:"Seattle", description:"Day School")
wheePreschool= School.create(name:"Whee Preschool", district:"San Francisco", description:"Preschool")
creatingChampions= School.create(name:"Creating Champions", district:"Seattle", description:"Academy")
prioritizePrimary= School.create(name:"Prioritize Primary", district:"Seattle", description:"Academy")
eastwoodHigh= School.create(name:"Eastwood High", district:"Seattle", description:"English school")

john = User.create(name: 'John')
mary = User.create(name: 'Mary')
jane = User.create(name: 'Jane')
scott = User.create(name: 'Scott')
zana = User.create(name: 'Zana')
gabriel = User.create(name: 'Gabriel')
nicole = User.create(name: 'Nicole')
gary = User.create(name: 'Gary')
brandon = User.create(name: 'Brandon')
josh = User.create(name: 'Josh')
candace = User.create(name: 'Candace')
erika = User.create(name: 'Erika')
david = User.create(name: 'David')
lena = User.create(name: 'Lena')
jo = User.create(name: 'Jo')
delilah = User.create(name: 'Delilah')
jimmy = User.create(name: 'Jimmy')
madelyn = User.create(name: 'Madelyn')
leo = User.create(name: 'Leo')
bella = User.create(name: 'Bella')
lexi = User.create(name: 'Lexi')
robin = User.create(name: 'Robin')
laura = User.create(name: 'Laura')
emily = User.create(name: 'Emily')
sheila = User.create(name: 'Sheila')
mackenzie = User.create(name: 'Mackenzie')
jetzen = User.create(name: 'Jetzen')
rheanne = User.create(name: 'Rheanne')
christabelle = User.create(name: 'Christabelle')
anna = User.create(name: 'Anna')
amber = User.create(name: 'Amber')
julian = User.create(name: 'Julian')
mark = User.create(name: 'Mark')
jason = User.create(name: 'Jason')

d1 = Donation.create(amount: 20, user_id: 1, supply_id: 1)
d2 = Donation.create(amount: 50, user_id: 2, supply_id: 2)
d3 = Donation.create(amount: 15, user_id: 3, supply_id: 3)
d4 = Donation.create(amount: 30, user_id: 4, supply_id: 4)
d5 = Donation.create(amount: 25, user_id: 5, supply_id: 5)
d6 = Donation.create(amount: 13, user_id: 6, supply_id: 6)
d7 = Donation.create(amount: 10, user_id: 7, supply_id: 7)
d8 = Donation.create(amount: 20, user_id: 8, supply_id: 8)

d9 = Donation.create(amount: 20, user_id: 9, supply_id: 9)
d10 = Donation.create(amount: 10, user_id: 10, supply_id: 10)
d11 = Donation.create(amount: 30, user_id: 11, supply_id: 11)
d12 = Donation.create(amount: 40, user_id: 12, supply_id: 12)
d13 = Donation.create(amount: 50, user_id: 13, supply_id: 13)
d14 = Donation.create(amount: 60, user_id: 14, supply_id: 14)
d15 = Donation.create(amount: 70, user_id: 15, supply_id: 15)
d16 = Donation.create(amount: 80, user_id: 16, supply_id: 16)

d17 = Donation.create(amount: 20, user_id: 17, supply_id: 17)
d18 = Donation.create(amount: 50, user_id: 18, supply_id: 18)
d19 = Donation.create(amount: 15, user_id: 19, supply_id: 19)
d20 = Donation.create(amount: 30, user_id: 20, supply_id: 20)
d21 = Donation.create(amount: 25, user_id: 21, supply_id: 21)
d22 = Donation.create(amount: 13, user_id: 22, supply_id: 22)
d23 = Donation.create(amount: 10, user_id: 23, supply_id: 23)
d24 = Donation.create(amount: 20, user_id: 24, supply_id: 24)

d25 = Donation.create(amount: 8, user_id: 25, supply_id: 25)
d26 = Donation.create(amount: 90, user_id: 26, supply_id: 26)
d27 = Donation.create(amount: 12, user_id: 27, supply_id: 27)
d28 = Donation.create(amount: 14, user_id: 28, supply_id: 28)
d29 = Donation.create(amount: 28, user_id: 29, supply_id: 29)
d30 = Donation.create(amount: 13, user_id: 30, supply_id: 30)
d31 = Donation.create(amount: 9, user_id: 31, supply_id: 31)
d32 = Donation.create(amount: 11, user_id: 32, supply_id: 32)

d33 = Donation.create(amount: 16, user_id: 1, supply_id: 35)
d34 = Donation.create(amount: 23, user_id: 2, supply_id: 36)
d35 = Donation.create(amount: 27, user_id: 3, supply_id: 37)
d36 = Donation.create(amount: 98, user_id: 4, supply_id: 38)
d37 = Donation.create(amount: 54, user_id: 5, supply_id: 39)
d38 = Donation.create(amount: 3, user_id: 6, supply_id: 40)
d39 = Donation.create(amount: 15, user_id: 33, supply_id: 33)
d40 = Donation.create(amount: 5, user_id: 34, supply_id: 34)

d41 = Donation.create(amount: 30, user_id: 7, supply_id: 41)
d42 = Donation.create(amount: 51, user_id: 8, supply_id: 42)
d43 = Donation.create(amount: 16, user_id: 9, supply_id: 43)
d44 = Donation.create(amount: 2, user_id: 10, supply_id: 44)
d45 = Donation.create(amount: 7, user_id: 11, supply_id: 45)
d46 = Donation.create(amount: 19, user_id: 12, supply_id: 46)
d47 = Donation.create(amount: 45, user_id: 13, supply_id: 47)
d48 = Donation.create(amount: 31, user_id: 14, supply_id: 48)

d49 = Donation.create(amount: 20, user_id: 15, supply_id: 49)
d50 = Donation.create(amount: 30, user_id: 16, supply_id: 50)
d51 = Donation.create(amount: 5, user_id: 22, supply_id: 37)
d52 = Donation.create(amount: 10, user_id: 21, supply_id: 13)
d53 = Donation.create(amount: 15, user_id: 17, supply_id: 1)
d54 = Donation.create(amount: 90, user_id: 18, supply_id: 5)
d55 = Donation.create(amount: 12, user_id: 19, supply_id: 48)
d56 = Donation.create(amount: 8, user_id: 20, supply_id: 25)
