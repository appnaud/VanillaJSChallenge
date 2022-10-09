let userid = localStorage.getItem("userid");
function greet() {
  document.querySelector("#logined").removeAttribute("hidden");
  document.querySelector("#greet").innerText = "Hello, " + userid;
}

if (userid == null) {
  document.querySelector("#login").removeAttribute("hidden");
  document.querySelector("#login").addEventListener("submit", (event) => {
    event.preventDefault();
    userid = document.querySelector("#userid").value;
    document.querySelector("#login").toggleAttribute("hidden");
    localStorage.setItem("userid", userid);
    greet();
  });
} else greet();
