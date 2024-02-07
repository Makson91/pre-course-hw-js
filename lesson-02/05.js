let passport = {
    name: "Petr",
    surname: "Petrov",
};

let passportClone = {};

for (let key in passport) {
    passportClone[key] = passport[key]
}

passportClone.name = "Ivan";

console.log(passport.name)
console.log(passportClone.name)