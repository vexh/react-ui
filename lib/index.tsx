// After
import React from 'react';
import { createRoot } from 'react-dom/client';
// import Button from './button';
import Icon from './icon';
const container = document.getElementById('app') as HTMLElement; // 必须确保 container 不是空
// import Button from './Button';
// export default function Index() {
//     return <div>xxxx</div>
// }
createRoot(container).render(<Icon name="alipay" />)