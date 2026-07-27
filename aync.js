const fs = require("fs");


//creating and writing into that file
fs.writeFile("about.txt", "I am Niveditha", (err) => {
    if (err) {
        console.log("Error creating file:", err);
        return;
    }

    console.log("File created successfully!");
});


//append
fs.appendFile("about.txt", "\nI am from Blore", (err) => {
    if (err) {
        console.log("Error creating file:", err);
        return;
    }

    console.log("Appended successfully!");
});

//delete
/*
fs.unlink("about.txt", (err) => {
    if (err) {
        console.log("Error creating file:", err);
        return;
    }

    console.log("File deleted successfully!");
});
*/