



// Config [ENTER] key
// Get the input field
var input = document.getElementById("t");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("bu").click();
  }
});



function print(text) {
    document.getElementById("main").innerHTML=(document.getElementById("main").innerHTML+"<br>"+text)
}

function after(a, b) {
    return a.substring(a.indexOf(b)+1);
}

var allPKG = "test<br>color<br>clear<br>js<br>pkg<br>device<br>help<br>restart"

var cnf = "<span style='color:red;'>ERROR: Command Not Found</span>"

print("WebTerminal b.1.0")
print("Copyright (c) 2022 Jacob Drath (jacobdrath.co)")
print('Run "> help" for help.')

function run(t) {
    print('<span style="color: blue"> > '+t+"</span>")
    if (t=="test") {
        print("Test Run C")
    }
    else if (t.startsWith("color")) {
        document.body.style.color=(after(t, " "))
        print("Color set.")
    }
    else if (t=="clear") {
        document.getElementById("main").innerHTML=("")
    }
    else if (t.startsWith("js")) {
        print(eval(after(t, " ")))
    }
    else if (t.startsWith("pkg")) {
        if (after(t, " ")=="pkg") {
            print("Welcome to PKG for WebTerminal.")
            print("This is the official package manager for WebTerminal.")
            print("Basic commands:<br>all: See all PKGs<br>remove: Remove a PKG<br>add: Add a PKG")
        }
        if (t=="pkg all") {
            print("Printing all PKGs")
            print(allPKG)
        }
        if (t.startsWith("pkg remove")) {
            if (after(after(t, " ") , " ")=="help") {
                print("Removing PKG \""+after(after(after(t, "e"), "e") , " ")+"\"...")
                setTimeout(function(){
                    localStorage.setItem("pkg_help", "0")
                    print("SUCCESS: Package was removed.")
                }, 5000)
            } 
            else if (after(after(t, " ") , " ")=="jacob") {
                print("Removing PKG \""+after(after(after(t, "e"), "e") , " ")+"\"...")
                setTimeout(function(){
                    localStorage.setItem("pkg_jacob", "0")
                    print("SUCCESS: Package was removed.")
                }, 5000)
            } 
            else if (after(after(t, " ") , " ")=="img") {
                print("Removing PKG \""+after(after(after(t, "e"), "e") , " ")+"\"...")
                setTimeout(function(){
                    localStorage.setItem("pkg_img", "0")
                    print("SUCCESS: Package was removed.")
                }, 5000)
            } 
            else {
                print("Removing PKG \""+after(after(after(t, "e"), "e") , " ")+"\"...")
                print("<span style='color: red;'>ERROR: PKG can not be removed</span>")
            }
        }
        if (t.startsWith("pkg add")) {
            if (after( after(t, " ")," ")=="help") {
                print("Adding PKG...")
                setTimeout(function(){
                    localStorage.setItem("pkg_help", "1")
                    print("SUCCESS: Package was added.")
                }, 5000)
            }
            else if (after( after(t, " ")," ")=="jacob") {
                print("Adding PKG...")
                setTimeout(function(){
                    localStorage.setItem("pkg_jacob", "1")
                    print("SUCCESS: Package was added.")
                }, 5000)
            }
            else if (after( after(t, " ")," ")=="img") {
                print("Adding PKG...")
                setTimeout(function(){
                    localStorage.setItem("pkg_img", "1")
                    print("SUCCESS: Package was added.")
                }, 5000)
            }
            else {
                print("<span style='color: red;'>ERROR: No PKG to install was found with set ID.</span>")
            }
        }
    }
    else if (t.startsWith("device")) {
        if (after(t, " ")=="ip") {
            fetch('https://ipapi.co/json/')
                .then(response => response.json())
                .then(data => print(data.ip));
        }
        if (after(t, " ")=="geo") {
            print("Getting data...")
            fetch('https://ipapi.co/json/')
                .then(response => response.json())
                .then(data => geoMOD(data));
        }
        if (t=="device") {
            print("Device Sub-Modules:")
            print("ip<br>geo<br>factory-reset<br>data<br>data length")
        }
        if (after(t, " ")=="factory-reset") {
            print("This device will factory reset in 10 seconds.")
            print("Run > restart to cancel.")
            setTimeout(function(){
                sessionStorage.clear()
                localStorage.clear()
                print("Device has been factory rested. Will restart in 5 seconds.")
                setTimeout(function(){
                    window.open(window.location.href, "_self")
                }, 5000);
            }, 10000);
        }
        if (t=="device data length") {
            print("Local: "+String(localStorage.length))
            print("Session: "+String(sessionStorage.length))
            print("Total: "+String(sessionStorage.length+=localStorage.length))
        }
    }
    else if (t=="help") {
        if (localStorage.getItem("pkg_help")==0) {
            print(cnf)
        } else {
            print("WebTerminal help is loading...")
            setTimeout(function(){
                print("WebTerminal is a simple Terminal made to run in a browser. You can view all available commands by running > pkg all. You can see command descriptions by running > help d.")
            }, 2000);
        }
    }
    else if (t=="help d") {
        if (localStorage.getItem("pkg_help")==0) {
            print(cnf)
        } else {
            print("WebTerminal help is loading...")
        setTimeout(function(){
            print("Here are a few basic commands to help you get started. > pkg is the package manager. > color #colorName# will change the color of the console. > clear will clear the console. > device has device information.")
        }, 2000);
        }
    }
    else if (t=="restart") {
        window.open(window.location.href, "_self")
    }
    else if (t=="jacob") {
        if (localStorage.getItem("pkg_jacob")=="1") {
            jacobMOD()
        } else {
            print(cnf)
        }
    }
    else if (t.startsWith("img")) {
        if (localStorage.getItem("pkg_img")=="1") {
            print("<img src='"+after(t, " ")+"' width='200'>")
        } else {
            print(cnf)
        }
    }

    else {
        print(cnf)
    }

    document.getElementById("t").value=("")
}

// MODS

// device geo
function geoMOD(e) {
    print("City: "+e.city)
    print("Region: "+e.region)
    print("Country: "+e.country_name)
    print("Latitude: "+e.latitude)
    print("Longitude: "+e.longitude)
}


function jacobMOD() {
    function t(_text) {
        print(_text)
      }
      t('──────█───███────███───███████─███████──')
      t('──────█──██─█───██─██──█─────█─█─────█──')
      t('──────█──█──█──██───█──█─────█─█────██──')
      t('──────█─██████─█───────█─────█─██████───')
      t('─█────█─█────█─█───────█─────█─█────██──')
      t('─█───██─█────█─█────█──█─────█─█─────█──')
      t('─██──█──█────█─██──██──█─────█─█───███──')
      t('──████──█────█──████───███████─█████────')
}