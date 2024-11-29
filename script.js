"use strict";

const statNumber = document.querySelector(".stat__number");
const textareaEl = document.querySelector("#textarea");
const charNum = document.querySelector(".stat__number--characters");
const wordNum = document.querySelector(".stat__number--words");
const twitterNum = document.querySelector(".stat__number--twitter");
const facebookNum = document.querySelector(".stat__number--facebook");
const TWITTER_CHAR = 280;
const FACEBOOK_CHAR = 2200;

textareaEl.addEventListener("input", (e) => {
  console.log(e.target.value);
  charNum.textContent = e.target.value.length;
  const numOfWords = textareaEl.value.split(" ").length;
  textareaEl.value.length === 0 && (numOfWords = 0);
  wordNum.textContent = numOfWords - 1;
  const twitterNumLeft = TWITTER_CHAR - e.target.value.length;
  twitterNum.textContent = twitterNumLeft;
  const facebookNumLeft = FACEBOOK_CHAR - e.target.value.length;
  facebookNum.textContent = facebookNumLeft;
  if (twitterNumLeft < 0) {
    twitterNum.style.color = "red";
  }
  if (facebookNumLeft < 0) {
    facebookNum.style.color = "red";
  }
});
