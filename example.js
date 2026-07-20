let user = prompt("What is ur favorite fruit?");


switch (user) {
  case "oranges":
    document.write("Oranges are $0.59 a pound.");
    break;
  case "apples":
    document.write("Apples are $0.32 a pound.");
    break;
  case "bananas":
    document.write("Bananas are $0.48 a pound.");
    break;
  case "cherries":
    document.write("Cherries are $3.00 a pound.");
    break;
  case "mangoes":
    document.write("Mangoes are $0.56 a pound.");
    break;
  case "papayas":
    document.write("Papayas are $2.79 a pound.");
    break;
  default:
    document.write(`Sorry, we are out of ${user}.`);
}
document.write("<br />Is there anything else you'd like?");



let are = prompt("Enter three characters: ");
if(are.length === 3) {
    document.write("<br />You entered exactly three characters.");
    document.write("Your value is: " +are);

}
else {
    document.write("<br />You did not enter exactly three characters.");
    let are = prompt("Enter three characters: ");
    document.write("Your value is: " +are);
}