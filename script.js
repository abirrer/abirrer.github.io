updateBgColor();
  
$("html").click(updateBgColor);

$("a").click(function(e){
  e.stopPropagation();
});

function updateBgColor() {
  const randomGeneratedColor = Math.floor(Math.random() * 16777215).toString(16);
  const bg_colour = "#" + ("000000" + randomGeneratedColor).slice(-6);
  
  document.body.style.backgroundColor = bg_colour;
  
  /*
  Check if the background is too dark and,  
  if so, change all font color to a light color.
  */
  if (tinycolor(bg_colour).isDark()) {  
    document.body.style.color = "#D3D3D3";
    $("a").css('color', "#D3D3D3");
  } else {
    document.body.style.color = "#080808";
    $("a").css('color', "#080808");
  }
}