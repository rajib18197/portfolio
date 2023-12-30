"use strict";

// const createSignal = function (value) {
//   let initialValue = value;
//   let currentState = initialValue;

//   const getState = function () {
//     currentState = initialValue;
//     return currentState;
//   };

//   const setState = function (newState) {
//     console.log(this);
//     if (newState === currentState) return;

//     currentState = newState;
//     return getState();
//   };

//   return [getState, setState];
// };

// const root = document.querySelector(".container");

// const generateMarkup = function () {
//   const [count, setCount] = createSignal(0);

//   const markup = `
//         <div class="counter">
//             <h3>Current Value: ${count()}</h3>
//             <button onclick="function r() {
//                 alert('hi');
//                 ${setCount(count() + 1)};
//               }; r()">Increment by 1</button>
//         </div>
//     `;

//   root.insertAdjacentHTML("beforeend", markup);
// };

// generateMarkup();

// To win in 2024 you don’t need to do anything fancy.

// You just have to be able to keep to working hard without seeing the reward for your hard work without losing enthusiasm for the work you do.

const inboxElement = document.querySelector(".inbox");

const cars = [
  "Rolls Royce",
  "BMW",
  "Ferrari",
  "Lamborghini",
  "Marcedes",
  "Audi",
];

const generateMarkup = function (value) {
  return `
    <div>
      <input type="checkbox" name="" id="" />
      <label>${value}</label>
    </div>
  `;
};

cars.forEach((car) =>
  inboxElement.insertAdjacentHTML("beforeend", generateMarkup(car))
);

const checkboxes = inboxElement.querySelectorAll("input");
console.log(checkboxes);

let lastChecked;

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", function (e) {
    let inBetween;

    if (e.shiftKey && this.checked && lastChecked) {
      checkboxes.forEach((checkbox) => {
        if (checkbox === this || checkbox === lastChecked)
          inBetween = !inBetween;

        if (inBetween) checkbox.checked = true;
      });
    }

    // If we checked an element then checked another element without shiftKey, then we need to reset the previous element which is checked before this element is checked. It's not mandatory but if it is a constrain then we have to write below code as well.

    // if (lastChecked && !e.shiftKey)
    //   checkboxes.forEach((el) => {
    //     if (el === this) {
    //       return;
    //     }
    //     el.checked = false;
    //   });

    // If current checked element is checked, then set the lastChecked to this checked element, if current checked element is unchecked, then set the lastChecked to false;

    if (this.checked) lastChecked = this;
    else lastChecked = false;
  })
);
