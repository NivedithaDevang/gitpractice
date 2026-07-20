function checkAge(age) {
  try {
    // 1. Test code for errors
    if (age <= 0) {
      throw new Error("Age cannot be zero or a negative number.");
    }
    console.log(`Access granted! You are ${age} years old.`);
    
  } catch (error) {
    // 2. Handle the error if one occurs
    console.error("An error occurred:", error.message);
    
  } finally {
    // 3. Always runs, regardless of an error
    console.log("Age verification check finished.");
  }
}

// Test cases
checkAge(25);  // Runs successfully
checkAge(-5);  // Triggers the exception handler
