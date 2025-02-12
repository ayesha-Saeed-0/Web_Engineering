// // const mainTitle = (document.getElementById("elementlist").innerText =
// //   "Revised title");
// const paragraphs = document.getElementsByClassName("demopara");
// const paragraphss = document.getElementsByTagName("div");
// const allParagraphs = document.querySelectorAll("p");
// const specialParagraph = document.querySelector("#specialpara");

// console.log(paragraphss);
// console.log(specialParagraph);
// parentnode
// firstchild
// children
// lastchild

// const gett = mainTitle.firstChild;

// console.log(gett);
// document.getElementById("main").innerText = "Revised title";
// document.getElementsByTagName("body").innerText = "<h1>I am Changed</h1>";

// const paragraphss = document.getElementById("elementlist");
// paragraphss.innerText = "I am Somewhere";
// paragraphss.innerHTML =
//   "<img id=image src=data:image/jpeg;base64,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>";
// console.log(paragraphss);
// paragraphss.style.backgroundColor = "purple";
// let imgg = document.getElementById("image");
// imgg.src =
//   "https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

// inner Html is the worst way to add tag

// const newElementsContainer = document.getElementById("elementlist");
// const newDiv = document.createElement("button");
// newDiv.textContent = "Dynamically Created Element";
// newDiv.classList.add("demopara");
// newElementsContainer.appendChild(newDiv);
// // newElementsContainer.remove();

// newDiv.addEventListener("click", (event) => {
//   console.log("You Clicked");
// });
// const iin = document.getElementById("clickbutton");

// let count = 0;
// newDiv.addEventListener("click", inc);
// newElementsContainer.innerText = count;
// function inc() {
//   return count++;
// }

// iin.addEventListener("mouseover", () => {
//   iin.style.backgroundColor = "red";
// });

// const newElementsContainer = document.getElementsByTagName("*");
// console.log(newElementsContainer);
// for (let i = 0; i < newElementsContainer.length; i++) {
//   console.log(newElementsContainer[i]);
// }
// const newElementsContainer = document.querySelectorAll("*");
// console.log(newElementsContainer);
// newElementsContainer.forEach((x) => {
//   console.log(x);
// });
