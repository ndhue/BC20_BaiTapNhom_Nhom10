document.getElementById("themeSwitch").onclick = function () {
  document.getElementById("themeSwitch").classList.toggle("switch");
};
document.getElementById("themeMoon").onclick = function(){
    document.documentElement.classList.add("dark");
}
document.getElementById("themeSun").onclick = function(){
    document.documentElement.classList.remove("dark");
}