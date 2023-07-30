// Callbacks
function loadScript(url, callback) {
    var script = document.createElement("script");
    script.src = url;
    script.onload = function() {
      console.log("Loaded script with Source: " + url)
      callback(null, url);
    }
    script.onerror = function() {
      console.log("Error loading script with SRC: " + url);
      callback(new Error("Src got some error"))
    }
    document.body.appendChild(script);
  }
  
  function hello(error, url) {
    if (error) {
      console.log("Hello " + error)
      return
    }
    alert('Hello World!' + url);
  }
  
  
  function goodmorning(error, url) {
    
    if (error) {
      console.log("Gud Morning " + error)
      sendEmergencyMessageToCeo();
      return
    }
    alert('Good morning ' + url);
  }
  
  loadScript("https://cdn.fjsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", hello) 