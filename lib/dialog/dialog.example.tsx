import React, { useState } from "react";
import { Dialog, alert, modal, confirm } from "../../lib/index";

function DialogExample1() {
  const [visible, setVisible] = useState(false);
  const onClockClick = () => {};
  return (
    <>
      <div>Example 1</div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        切换
      </button>
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
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        切换
      </button>
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
      <button
        onClick={() => {
          const close = modal(<strong>你好</strong>, [
            <button
              onClick={() => {
                close();
                console.log("yes");
              }}
            >
              Yes
            </button>,
            <button
              onClick={() => {
                close();
                console.log("no");
              }}
            >
              No
            </button>,
          ]);
        }}
      >
        modal
      </button>
    </>
  );
}

function DialogExampleConfirm() {
  return (
    <button
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
    </button>
  );
}
function DialogExampleAlert() {
  return (
    <button
      onClick={() => {
        alert('一行提示信息', () => {console.log('afterAlertClosed.')});
      }}
    >
      alert
    </button>
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
