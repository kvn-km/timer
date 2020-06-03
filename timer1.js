const timer = function(argv) {

  let input = process.argv.splice(2).sort((a, b) => a - b).map(x => x * 1000);
  let times = [];
  let aSecondaryTimer = 0;

  input.forEach(t => {
    if (t > 0) {
      times.push(t);
    }
  });

  if (times === []) {
    return;
  } else {

    for (time of times) {

      setTimeout(() => {
        process.stdout.write("."); // couldn't get system to beep, changing to printing a dot
      }, time);

      aSecondaryTimer = time;

    }
    setTimeout(() => {
      process.stdout.write("\n");
    }, aSecondaryTimer + 50);

  };
};
timer();