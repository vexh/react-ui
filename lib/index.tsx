export { default as Icon } from './icon/icon';
export { default as Dialog, alert, confirm, modal } from './dialog/dialog';
import './index.scss';
// After
// import React from 'react';
// import Icon from './icon/icon';
// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('app') as HTMLElement; // 必须确保 container 不是空
// // import Button from './Button';
// // export default function Index() {
// //     return <div>xxxx</div>
// // }
// createRoot(container).render(<Icon name="wechat" onClick={() => {console.log('click')}} onMouseEnter={() => {console.log('onMouseEnter')}} onMouseLeave={() => {console.log('onMouseLeave')}} />)