//there was no sound using \x07 but i have attached console logs for each time and beep

const args = process.argv;

if (args === "") {
  return;
}

let arrayOfNumbers = args.slice(2);

for (let i = 0; i < arrayOfNumbers.length; i++) {

  if (!isNaN(arrayOfNumbers[i])) {
    if (arrayOfNumbers[i] >= 0) {
      setTimeout(() => {

        console.log("BEEP! after " + arrayOfNumbers[i] + " seconds");
        process.stdout.write('\x07');

      }, arrayOfNumbers[i] * 1000);
    }
  }
}
