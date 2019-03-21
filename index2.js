function uniqueInOrder(string) {
  return String.prototype.concat(...new Set(string));
}
console.log(uniqueInOrder("DDDDDddaaaaaaaadjj"));

test = () => {
  if (uniqueInOrder("AABBCCdd") === "ABCd") {
    console.log("test ok");
  } else {
    console.log("nul");
  }
};
test();
