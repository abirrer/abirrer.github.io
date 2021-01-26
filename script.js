updateBgColor();
  
$("html").click(updateBgColor);

function updateBgColor() {
  const randomGeneratedColor = Math.floor(Math.random() * 16777215).toString(16);
  const bg_colour = "#" + ("000000" + randomGeneratedColor).slice(-6);
  // console.log('background:', bg_colour, 'the background color is dark' tinycolor(bg_colour).isDark());
  
  document.body.style.backgroundColor = bg_colour;
  if (tinycolor(bg_colour).isDark()) {  
    document.body.style.color = "#D3D3D3";
  } else {
    document.body.style.color = "#000000";
  }
}