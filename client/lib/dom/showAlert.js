import { typeError } from '../error/typeError.js';
import { isString } from '../utils/typeOf.js';
import { addClass, removeClass } from './css.js';
import { getNode } from './getNode.js';

export function showAlert(node, message, timeout = 1000) {
  if (isString(node)) {
    node = getNode(node);
  }

  node.textContent = message;
  addClass(node, 'is-active');
  setTimeout(() => {
    removeClass(node, 'is-active');
  }, timeout);
}
