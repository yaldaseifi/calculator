let i1 = document.querySelector("input#i1");
let i2 = document.querySelector("input#i2");
let sum = document.querySelector("button#sum");
sum.addEventListener("click", function () {
  document.querySelector("h1").innerHTML = Number(i1.value) + Number(i2.value);
});
let sub = document.querySelector("button#sub");
sub.addEventListener("click", function () {
  document.querySelector("h1").innerHTML = Number(i1.value) - Number(i2.value);
});
let t = document.querySelector("button#t");
t.addEventListener("click", function () {
  document.querySelector("h1").innerHTML = Number(i1.value) / Number(i2.value);
});
let z = document.querySelector("button#z");
z.addEventListener("click", function () {
  document.querySelector("h1").innerHTML = Number(i1.value) * Number(i2.value);
});
