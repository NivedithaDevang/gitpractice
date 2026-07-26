let employees = [
  { id: 1, name: "Niveditha", department: "HR", age: 21 },
  { id: 2, name: "Navya", department: "IT", age: 25 },
  { id: 3, name: "Dhanush", department: "Finance", age: 24 },
  { id: 4, name: "Hemanth", department: "IT", age: 27 },
  {id: 5, name: "Shashank", department: "HR", age: 22 },
];

//to display in dict format
function display() {
    console.log("-----------------------------------------------");
    console.log("Employee List");
    console.log(employees);
}
display();

//to display in table format
function table() {
console.log("-----------------------------------------------");
    console.log("Employee List in Table Format");
    console.table(employees);
}
table();


//to search employee by id
function search(id) {
    let employee = employees.find(emp => emp.id === id);
console.log("-----------------------------------------------");
console.log("Searching Emp by id");
    console.log("Employee found:", employee);
}
search(2);

//to search employee by name
function searchName(name) {
    let employee = employees.find(emp => emp.name === name);
console.log("-----------------------------------------------");
    console.log("Searching Emp by name");
    console.log("Employee found:", employee);
    console.table(employee);
}
searchName("Dhanush");


//to filter employee by department
function department(department) {
    let filterEmp = employees.filter(emp => emp.department === department);
console.log("-----------------------------------------------");
console.log("Filtering Emp by department");
    console.table(filterEmp);
}
department("IT");


//to sort by name
function sortName() {
    let sortedEmp = employees.sort((a, b) => a.name.localeCompare(b.name));
     console.log("-----------------------------------------------");
    console.log("Sorting Emp by name");
    console.table(sortedEmp);
}
sortName();


//add new employee
function addEmployee(newEmp) {
    employees.push(newEmp);
console.log("-----------------------------------------------");
console.log("Adding New Employee");
    console.table(employees);
}
addEmployee({ id: 6, name: "Dainy", department: "Development", age: 25 });


//edit employee details
function editEmployee(id, name, department, age) {

    for (let emp of employees) {

        if (emp.id === id) {

            emp.name = name;
            emp.department = department;
            emp.age = age;

            console.log("Employee Updated");
            return;
        }
    }

    console.log("Employee Not Found");
}
editEmployee(3, "Dhanush Raj", "Finance", 26);
console.log("-----------------------------------------------");
console.log("Editing Employee Details");
 console.table(employees);

//it comes not found
 editEmployee(7, "John Doe", "Marketing", 30); 


 //delete employee
function deleteEmployee(id) {

    employees = employees.filter(emp => emp.id !== id);
    console.log("-----------------------------------------------");
    console.log("Employee Deleted");
    console.table(employees);

}
deleteEmployee(4);