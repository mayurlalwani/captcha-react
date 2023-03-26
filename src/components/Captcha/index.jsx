import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Captcha.css";

const Captcha = () => {
  const [captcha, setCaptcha] = useState("");
  const [inputCaptcha, setInputCaptcha] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const createCaptcha = () => {
    let captcha = new Array();
    for (let q = 0; q < 6; q++) {
      if (q % 2 == 0) {
        captcha[q] = String.fromCharCode(Math.floor(Math.random() * 26 + 65));
      } else {
        captcha[q] = Math.floor(Math.random() * 10 + 0);
      }
    }
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
    if (inputCaptcha === "") {
      setErrorMsg("Re-Captcha must be filled");
    } else if (validateCaptcha > 0 || inputCaptcha.length > 6) {
      setErrorMsg("Wrong captcha");
      setSuccessMsg("");
    } else {
      setErrorMsg("");
      setSuccessMsg("Correct!!");
    }
  };

  useEffect(() => {
    createCaptcha();
  }, []);

  return (
    <>
      <div className="captcha-container">
        <div id="captcha" className="captcha">
          {captcha}{" "}
        </div>

        <div className="input-captcha">
          <Form.Group controlId="reCaptcha" className="form-group">
            <Form.Control
              type="text"
              placeholder="Type the captcha"
              onChange={(e) => setInputCaptcha(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <div className="restart">
            <Button
              variant="link"
              onClick={createCaptcha}
              style={{ fontSize: "16px" }}
            >
              Change
            </Button>
          </div>
        </div>
        <div>
          <Button
            variant="secondary"
            onClick={validateCaptcha}
            style={{ marginBottom: "10px", display: "flex" }}
          >
            Validate
          </Button>
        </div>
        <div id="errCaptcha" className="errMsg">
          {errorMsg}
        </div>
        <div className="success-msg">{successMsg}</div>
      </div>
    </>
  );
};

export default Captcha;
