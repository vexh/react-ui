import React, { useState } from "react";
import Dialog, { alert, modal, confirm } from "./dialog";
import Button from "../button/button";

function DialogExample1() {
  const [visible, setVisible] = useState(false);
  const onClockClick = () => {};
  return (
    <>
      <div>Example 1</div>
      <Button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        切换
      </Button>
      <Dialog
        visible={visible}
        onClose={() => setVisible(false)}
        buttons={[<button onClick={() => setVisible(false)}>1</button>, <button onClick={() => setVisible(false)}>2</button>]}
      >
        <strong>hi</strong>
      </Dialog>
    </>
  );
}

function DialogExample2() {
  const [visible, setVisible] = useState(false);
  const onClockClick = () => {};
  return (
    <>
      <div>Example 2</div>
      <Button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        切换
      </Button>
      <Dialog
        visible={visible}
        onClose={() => setVisible(false)}
        closeOnMaskClick
        buttons={[<button onClick={() => setVisible(false)}>1</button>, <button onClick={() => setVisible(false)}>2</button>]}
      >
        <strong>hi</strong>
      </Dialog>
    </>
  );
}

function DialogExampleModal() {
  return (
    <>
      <div>Example 3</div>
      <Button
        onClick={() => {
          const close = modal(<strong>你好</strong>, [
            <Button
              onClick={() => {
                close();
                console.log("yes");
              }}
            >
              Yes
            </Button>,
            <Button
              onClick={() => {
                close();
                console.log("no");
              }}
            >
              No
            </Button>,
          ]);
        }}
      >
        modal
      </Button>
    </>
  );
}

function DialogExampleConfirm() {
  return (
    <Button
      onClick={() => {
        confirm(
          "是否确定提交?",
          () => {
            console.log("提交");
          },
          () => {
            console.log("取消");
          }
        );
      }}
    >
      confirm
    </Button>
  );
}
function DialogExampleAlert() {
  return (
    <Button
      onClick={() => {
        alert('一行提示信息', () => {console.log('afterAlertClosed.')});
      }}
    >
      alert
    </Button>
  );
}

export default function () {
  return (
    <>
      <div>
        <DialogExample1 />
      </div>
      <div>
        <DialogExample2 />
      </div>
      <div>
        <DialogExampleModal />
      </div>
      <div>
        <DialogExampleConfirm />
      </div>
      <div>
        <DialogExampleAlert />
      </div>
    </>
  );
}
