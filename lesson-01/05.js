let rule = "Еще не родился тот человек, который поставил бы цель и не смог бы стать программистом.";
let ruleLength = rule.length;
console.log(ruleLength);

switch (true) {
    case (ruleLength < '25'):
        console.log("Все таки нет правил без исключения");
        break;
    case (ruleLength > '25'):
        console.log("У меня 100 пудов все получится");
        break;

    case (ruleLength === '25'):
        console.log("50 на 50");
        break;

}