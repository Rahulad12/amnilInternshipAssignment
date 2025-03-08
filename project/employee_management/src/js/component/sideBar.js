const sideBar = document.getElementById("side-bar");

const Logout = async () => {
  localStorage.removeItem("token");
  window.location.href = "../screen/userLogin.html";
};

export const sideBarComponent = (...sidebarelement) => {
  // Map elements to HTML
  sideBar.innerHTML = sidebarelement
    .map((element) => `<ul>${element}</ul>`)
    .join(""); // Convert array to string

  const logout = document.getElementById("logout");
  logout.addEventListener("click", Logout);
};
