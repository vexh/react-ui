export default function scrollbarWidth() {

  const div = document.createElement('div');

  div.style.position = 'absolute';
  div.style.top = div.style.left = '-99920px'; // 把 div 放到屏幕之外，防止影响用户
  div.style.width = div.style.height = '100px';
  div.style.overflow = 'scroll';
  div.style.border = '1px solid red';

  document.body.appendChild(div);

  const width = div.offsetWidth - div.clientWidth;

  document.body.removeChild(div);

  return width;
}