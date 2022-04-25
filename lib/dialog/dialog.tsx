import React, { ReactElement, ReactNode } from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import Icon from "../icon/icon";
import "./dialog.scss";

interface DialogProps {
  visible: boolean;
  children?: ReactNode;
  buttons?: Array<ReactElement>;
  onClose: React.MouseEventHandler;
  closeOnMaskClick?: boolean;
}

function makeCommonClassName(prefix: string) {
  return function (className: string) {
    return [prefix, className].filter(Boolean).join("-");
  };
}
const scopedClassName = makeCommonClassName("deepin-dialog");
const sc = scopedClassName;

const Dialog: React.FunctionComponent<DialogProps> = ({ visible, buttons, children, onClose, closeOnMaskClick }) => {
  const onMaskClick: React.MouseEventHandler = (e) => {
    if (!closeOnMaskClick) return;
    onClose(e);
  };

  const component = visible ? (
    <>
      <div className={sc("mask")} onClick={(e) => onMaskClick(e)}></div>
      <div className={sc("")}>
        <div className={sc("close")} onClick={(e) => onClose(e)}>
          <Icon name="close" />
        </div>
        <header className={sc("header")}>提示</header>
        <main className={sc("main")}>{children}</main>
        {buttons && <footer className={sc("footer")}>{buttons.map((button, index) => React.cloneElement(button, { key: index }))}</footer>}
      </div>
    </>
  ) : null;

  return ReactDOM.createPortal(component, document.body);
};

export function alert(content?: ReactNode, afterClose?: () => void) {
  const buttons = [
    <button
      onClick={() => {
        close();
        afterClose && afterClose();
      }}
    >
      Ok
    </button>,
  ];
  const close = modal(content, buttons);
}

export function confirm(content?: ReactNode, onOk?: () => void, onCancel?: () => void) {
  const buttons = [
    <button
      onClick={() => {
        close();
        onOk && onOk();
      }}
    >
      Yes
    </button>,
    <button
      onClick={() => {
        close();
        onCancel && onCancel();
      }}
    >
      No
    </button>,
  ];
  const close = modal(content, buttons);
}

export function modal(content: ReactNode, buttons?: Array<ReactElement>) {
  const div = document.createElement("div");
  const root = createRoot(div);
  const close = () => {
    root.render(React.cloneElement(component, { visible: false }));
    root.unmount();
    div.remove();
  };
  const component = (
    <Dialog
      visible={true}
      buttons={buttons}
      onClose={() => {
        close();
      }}
    >
      {content}
    </Dialog>
  );

  root.render(component);
  return close;
}

export default Dialog;
