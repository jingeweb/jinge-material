import { $$, Component } from 'jinge';
import { IconState } from 'jinge-symbols';

export interface StateComp {
  state: IconState;
  active?: boolean;
  press?: boolean;
  hover?: boolean;
}
export function initState(comp: Component & StateComp, hoverCtrl = false) {
  function update() {
    const hv = !comp.press && comp.hover;
    comp.state = comp.active ? (hv ? 'activeHover' : 'active') : hv ? 'hover' : 'normal';
  }
  update();
  comp[$$].__watch('active', update);
  comp[$$].__watch('hover', update);
  comp[$$].__watch('press', update);
  comp.__on('after-render', () => {
    const el = comp.__firstDOM as HTMLElement;
    comp.__domAddListener(el, 'mouseenter', () => {
      if (!hoverCtrl) {
        // 如果是受控模式，则不更新 hover 属性，待 notify 到外部后由外部控制。
        comp.hover = true;
      }
      comp.__notify('hover', true);
    });
    comp.__domAddListener(el, 'mouseleave', () => {
      if (!hoverCtrl) {
        comp.hover = false;
      }
      comp.__notify('hover', false);
    });
    comp.__domAddListener(el, 'mousedown', () => {
      comp.press = true;
      comp.__notify('press', true);
    });
    comp.__domAddListener(el, 'mouseup', () => {
      comp.press = false;
      comp.__notify('press', false);
    });
  });
}
