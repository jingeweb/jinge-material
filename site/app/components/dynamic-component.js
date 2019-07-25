import {
  Component
} from 'jinge';
import {
  RENDER,
  ROOT_NODES,
  CONTEXT,
  ARG_COMPONENTS
} from 'jinge/core/component';
import {
  createComment
} from 'jinge/dom';
import {
  STR_EMPTY,
  STR_DEFAULT
} from 'jinge/util';
import {
  wrapAttrs
} from 'jinge/viewmodel/proxy';

export class DynamicComponent extends Component {
  constructor(attrs) {
    super(attrs);
    this._component = attrs._component;
    this._render = attrs._render;
  }

  [RENDER]() {
    const roots = this[ROOT_NODES];
    const Clazz = this._component;
    if (Clazz) {
      const el = new Clazz(wrapAttrs({
        [CONTEXT]: this[CONTEXT]
      }));
      roots.push(el);
      return el[RENDER]();
    }
    const renderFn = this._render;
    if (renderFn) {
      const el = new Component(wrapAttrs({
        [CONTEXT]: this[CONTEXT],
        [ARG_COMPONENTS]: {
          [STR_DEFAULT]: renderFn
        }
      }));
      roots.push(el);
      return el[RENDER]();
    }
    roots.push(createComment(STR_EMPTY));
    return roots;
  }
}
