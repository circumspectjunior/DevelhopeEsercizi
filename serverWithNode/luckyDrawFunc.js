function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));
    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}
luckyDraw("Joe")
  .then((resultJoe) => console.log(resultJoe))
  .then(() => luckyDraw("Caroline"))
  .then((resultCaro) => console.log(resultCaro))
  .then(() => luckyDraw("Sabrina"))
  .then((resultSab) => console.log(resultSab))
  .catch((error) => console.error(error.message));
