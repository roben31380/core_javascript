import { getNode } from './getNode.js';

export default function clearContents(node) {
  if (typeof node === 'string') node = document.body.querySelector(node);
  if (node.nodeName === 'INPUT' || node.nodeName === 'TEXTAREA') {
    node.value = '';
    return;
  }

  node.textContent = '';
}
