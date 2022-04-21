import * as React from "react";
import Button from "./button";
import "./button.example.scss";

const ButtonExample = () => {
  return (
    <div className="button-example">
      <Button level="normal">button normal</Button>
      <Button level="normal" disabled>
        normal disabled
      </Button>
    </div>
  );
};

const ButtonExample2 = () => {
  return (
    <div className="button-example">
      <Button level="suggest">button normal</Button>
      <Button level="suggest" disabled>
        suggest disabled
      </Button>
    </div>
  );
};


const ButtonExample3 = () => {
  return (
    <div className="button-example">
      <Button level="warning">warning</Button>
      <Button level="warning" disabled>
        warning disabled
      </Button>
    </div>
  );
};

export default function() {
  return <>
    <h1>Normal</h1>
    <ButtonExample />
    <h1>Suggest </h1>
    <ButtonExample2 />
    <h1>Warining</h1>
    <ButtonExample3 />
  </>
};
