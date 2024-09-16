export interface SlideToggleState {
  checked: boolean;
}

export interface MatSlideToggleChange {

  readonly source: SlideToggleComponent;

  readonly checked: boolean;
}