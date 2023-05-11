function* gen() {
  console.log("eerste");
  yield 4;
  console.log("tweede");
  yield 8;
  console.log("derde");
  yield 15;
  console.log("vierde");
  yield 16;
}

for (let item of gen()) {
  console.log("gen'ed item: ", item);
}
