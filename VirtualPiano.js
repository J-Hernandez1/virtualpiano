document.addEventListener("keydown", function (event) {

            if (event.code == "KeyA") {
                console.log("The 'A' key is pressed");
                let audioA = new Audio("whitekeys/A.mp3");
                audioA.play();
            }

            else if (event.code == "KeyS") {
                console.log("The 'S' key is pressed");
                let audioS = new Audio("whitekeys/S.mp3");
                audioS.play();
            }

            else if (event.code == "KeyD") {
                console.log("The 'D' key is pressed");
                let audioD = new Audio("whitekeys/D.mp3");
                audioD.play();
            }

            else if (event.code == "KeyF") {
                console.log("The 'F' key is pressed");
                let audioF = new Audio("whitekeys/F.mp3");
                audioF.play();
            }

            else if (event.code == "KeyG") {
                console.log("The 'G' key is pressed");
                let audioG = new Audio("whitekeys/G.mp3");
                audioG.play();
            }

            else if (event.code == "KeyH") {
                console.log("The 'H' key is pressed");
                let audioH = new Audio("whitekeys/H.mp3");
                audioH.play();
            }

            else if (event.code == "KeyJ") {
                console.log("The 'J' key is pressed")
                let audioJ = new Audio("whitekeys/J.mp3")
                audioJ.play()
            }


            {

                if (event.code == "KeyW") {
                    console.log("The 'W' key is pressed");
                    let audioW = new Audio("black_keys/W.mp3");
                    audioW.play();
                } else if (event.code == "KeyE") {
                    console.log("The 'WE key is pressed");
                    let audioE = new Audio("black_keys/E.mp3");
                    audioE.play();
                } else if (event.code == "KeyT") {
                    console.log("The 'T' key is pressed");
                    let audioT = new Audio("black_keys/T.mp3");
                    audioT.play();
                } else if (event.code == "KeyY") {
                    console.log("The 'Y' key is pressed");
                    let audioY = new Audio("black_keys/Y.mp3");
                    audioY.play();
                } else if (event.code == "KeyU") {
                    console.log("The 'U' key is pressed");
                    let audioU = new Audio("black_keys/U.mp3");
                    audioU.play();
                } 
                else
                    console.log("Warning");
            }});