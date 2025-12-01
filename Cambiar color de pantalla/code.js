onEvent("button1", "click", function( ) {
  timedLoop(50, function() {
    setProperty("screen1", "background-color", rgb(randomNumber(0, 255), randomNumber(0, 255), randomNumber(0, 255), 0.5));
  });
  onEvent("music", "click", function( ) {
    playSound("assets/krav-mag---letra.mp3", false);
  });
});
onEvent("text_input1", "input", function( ) {
  setProperty("screen1", "image", "https://i.pinimg.com/736x/48/bc/44/48bc4414946428203cefb5dd3165b3af.jpg");
});
