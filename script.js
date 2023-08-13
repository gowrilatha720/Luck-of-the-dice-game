var res = Math.floor(Math.random() * 6) + 1;
var res1 = "dice"+res+".png";
var res2 = "images/"+res1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",res2);

var latha = Math.floor(Math.random() * 6) + 1;
var ans = "images/dice"+latha+".png";
document.querySelectorAll("img")[1].setAttribute("src",ans);

if(res > latha)
{
  document.querySelector("h1").innerHTML = "Player1 wins";
}
else if(latha > res)
{
  document.querySelector("h1").innerHTML = "Player2 wins";
}
else 
{
  document.querySelector("h1").innerHTML = "Draw";
}