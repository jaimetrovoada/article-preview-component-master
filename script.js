const share = document.querySelector("#shareButton");
const fb = "./images/icon-facebook.svg";
const tw = "./images/icon-twitter.svg";
const pint = "./images/icon-pinterest.svg";
const info = document.querySelector("#info");
const person = document.querySelector("#person");

share.addEventListener("click", (e) => {
  console.log("share was clicked");
  showSocial();
});

const shareInactive = share.innerHTML;
const shareActive =
  share.innerHTML +
  `<div class="showShare"><span>SHARE</span>
    <div class="fb"><a href="#"><img src="${fb}"></a></div>
    <div class="tw"><a href=""><img src="${tw}"></a></div>
    <div class="pint"><a href=""><img src="${pint}"></a></div>
</div>`;

const personInactive = person.innerHTML;
const personActive = `<div class="showShare"><span>SHARE</span>
    <div class="fb"><a href="#"><img src="${fb}"></a></div>
    <div class="tw"><a href=""><img src="${tw}"></a></div>
    <div class="pint"><a href=""><img src="${pint}"></a></div>
</div>`;

function showSocial() {
  if (window.innerWidth > 768) {
    if (share.classList.contains("inactive")) {
      share.classList.remove("inactive");
      share.classList.add("active");
      share.innerHTML = shareActive;
    } else if (share.classList.contains("active")) {
      share.classList.remove("active");
      share.classList.add("inactive");
      share.innerHTML = shareInactive;
    }
  } else if (window.innerWidth <= 768) {
    if (info.classList.contains("inactive")) {
      info.classList.remove("inactive");
      info.classList.add("active");
      person.innerHTML = personActive;
    } else if (info.classList.contains("active")) {
      info.classList.remove("active");
      info.classList.add("inactive");
      person.innerHTML = personInactive;
    }
  }
}
