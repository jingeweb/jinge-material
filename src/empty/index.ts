import { Attributes, Component } from 'jinge';

import _tpl from './index.html';

export interface EmptyStateAttrs {
  rounded?: boolean;
  size?: string | number;
  label: string;
  description?: string;
}
export class EmptyState extends Component {
  static template = _tpl;

  rounded: boolean;
  size: number;
  label: string;
  description: string;

  constructor(attrs: Attributes<EmptyStateAttrs>) {
    super(attrs);
    this.rounded = attrs.rounded;
    this.size = Number(attrs.size || 420);
    this.label = attrs.label;
    this.description = attrs.description;
  }
}
