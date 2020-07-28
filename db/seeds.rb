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


