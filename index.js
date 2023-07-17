// console.log(document.querySelector(".text").textContent);
// console.log((document.querySelector(".number").value = 15));
// const check = function () {
//   console.log(document.querySelector(".number").value);
// };
// document.querySelector("#check").addEventListener("click", check);
//The above method is firstd efining the function and then using it in the addEventLitner

document.querySelector("#check").addEventListener("click", function () {
  console.log(document.querySelector(".number").value);
  document.querySelector(".guess").textContent = "You guessed it Right ✌🏻";
});
// this how we directly define the function in addEventListner.
