import React, { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import { ThemeContext } from "../../context/ThemeContext";
import "./MainScreen.css";
import "../../App.css";

const MainScreen = ({ title, children }) => {
  const theme = useContext(ThemeContext);

  const className = "panel-" + theme;

  return (
    <div className={className}>
      <div className="mainback">
        <Container>
          <Row>
            <div className="page">
              {title && (
                <>
                  <h1 className="heading"> {title} </h1>
                  <hr />
                </>
              )}
              {children}
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default MainScreen;
