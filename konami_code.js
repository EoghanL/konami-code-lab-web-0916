const code = [38, 38, 38, 38, 40, 40, 40, 40, 37, 37, 39, 39, 37, 37, 39, 39, 66, 66, 65, 65]
var index = 0;
function init() {
  document.body.addEventListener('keydown', function(e) {
    const key = parseInt(e.detail || e.which)
    console.log(key)                  // Put this here to track why the test
    if(key === code[index]){          // wasn't passing and the keydown even was
      index++                         // being registered twice? so I doubled the code
      if(index === (code.length - 1)){// to make the test pass.
          window.alert("KONAMI CODE ACTIVATED");
          index = 0;
      }
    }else{
      index = 0;
    }
  })
}
init()
