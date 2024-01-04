const menu_hide=true;
let menu_container=document.getElementById("nav-bar-id");
let btn = document.getElementById("icon-id");

function show () {
  if(menu_hide==true) {
    menu_container.classList.add("addcls")
    menu_hide=false;
  }
  else{
    menu_container.classList.remove("addcls");
    menu_hide=true;
  }
}