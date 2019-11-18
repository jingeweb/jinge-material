import {
  Component,
  RENDER,
  ROOT_NODES,
  CONTEXT,
  ARG_COMPONENTS,
  createComment,
  STR_EMPTY,
  STR_DEFAULT,
  wrapAttrs
} from 'jinge';

export class DynamicComponent extends Component {
  constructor(attrs) {
    super(attrs);
    this._component = attrs.component;
    this._render = attrs.render;
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
