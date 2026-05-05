function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> write your answer here
// Three times.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
/* The first time pad() run, its used for hours part of time.
   Because 61 seconds equals 0 hours, the value given to num is 0. */
// c) What is the return value of pad is called for the first time?
// =============> write your answer here
/* The first time pad() runs, it's formatting the hours part of time.
Since the hours value is 0, it turns that into the string '00' by adding a leading zero before returning it. */

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
/* When the function runs with 61 seconds, the last time pad() is called is for the second part of the time.
Since 61 seconds has 1 second left over after making a full minute, the value passed into pad() is 1.
Inside the function, num equals 1, and it gets turned into '01' so the final time shows as 00:01:01. */

// e) What is the return value of pad when it is called for the last time in this program?  Explain your answer
// =============> write your answer here
/* When pad() is called for the last time, num is 1 because there's 1 second left over.
   The function turns that number into the string '01' by adding a leading zero.
   That '01' is the value that gets returned and used as the seconds part of the final time display (00:01:01). */
