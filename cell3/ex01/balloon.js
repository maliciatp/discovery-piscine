function changeSize() {
    var ballon = document.getElementById("ballon");
    var widthBallon = ballon.offsetWidth;
    var heightBallon = ballon.offsetHeight;
    if (widthBallon <= 420)
    {
      ballon.style.width = (widthBallon + 10) + "px";
      ballon.style.height = (heightBallon + 10) + "px";
      changeColor();
    } else {
      ballon.style.width = "200px";
      ballon.style.height = "200px";
      changeColor();
    }
  }
  function changeColor() {
    if (ballon.style.backgroundColor == "red")
    {
      ballon.style.backgroundColor = "green";
    } else if (ballon.style.backgroundColor == "green"){
      ballon.style.backgroundColor = "blue";
    } else {
      ballon.style.backgroundColor = "red";
    }
  }
  function minimSize() {
    var ballon = document.getElementById("ballon");
    var widthBallon = ballon.offsetWidth;
    var heightBallon = ballon.offsetHeight;
    if (widthBallon > 200)
    {
      ballon.style.width = (widthBallon -5) + "px";
      ballon.style.height = (heightBallon - 5) + "px";
      changeColor();
    }
  }
  function changeColor() {
    if (ballon.style.backgroundColor == "red")
    {
      ballon.style.backgroundColor = "blue";
    } else if (ballon.style.backgroundColor == "blue"){
      ballon.style.backgroundColor = "green";
    } else {
      ballon.style.backgroundColor = "red";
    }
  }