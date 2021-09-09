let frinedship;

if (true) {
  // heはifブロックから外れると参照されなくなる。
  const he = 'Kakeru';
  const saveHim = () => {
    console.log(`${he} saved`);
  };
  // そこで外からの参照(frinedship)を残すと
  // frinedship = saveHim;
}
// frinedship();
// heは生き残ることができる。