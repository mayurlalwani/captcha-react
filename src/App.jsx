import { useEffect, useState } from "react";

function App() {
  const [captcha, setCaptcha] = useState("");
  const [inputCaptcha, setInputCaptcha] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const createCaptcha = () => {
    let captcha = new Array();
    for (let q = 0; q < 6; q++) {
      if (q % 2 == 0) {
        captcha[q] = String.fromCharCode(Math.floor(Math.random() * 26 + 65));
      } else {
        captcha[q] = Math.floor(Math.random() * 10 + 0);
      }
    }
    console.log({ captcha });
    let theCaptcha = captcha.join("");
    setCaptcha(theCaptcha);
  };

  const validateCaptcha = () => {
    let validateCaptcha = 0;
    for (var z = 0; z < 6; z++) {
      if (inputCaptcha.charAt(z) != captcha[z]) {
        validateCaptcha++;
      }
    }
    if (inputCaptcha == "") {
      setErrorMsg("Re-Captcha must be filled");
    } else if (validateCaptcha > 0 || inputCaptcha.length > 6) {
      setErrorMsg("Wrong captcha");
    }
  };

  useEffect(() => {
    createCaptcha();
  }, []);

  return (
    <>
      <div className="container">
        <div id="captcha" className="captcha">
          {captcha}{" "}
        </div>
        <div className="restart">
          <a href="#" onClick={createCaptcha}>
            Change
          </a>
        </div>
        <div className="input">
          <input
            type="text"
            name="reCaptcha"
            id="reCaptcha"
            placeholder="Type The Captcha"
            onChange={(e) => setInputCaptcha(e.target.value)}
          />
        </div>
        <div>
          <input type="button" value="Submit" onClick={validateCaptcha} />
        </div>
        <div id="errCaptcha" className="errmsg">
          {errorMsg}
        </div>
      </div>
    </>
  );
}

export default App;
