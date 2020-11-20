import { Component } from 'react';
import { THEMES } from './enums';

export interface ISimpleButton {
    mainText : string | Component,
    isDisabled : boolean,
    theme : THEMES
}

export interface IComplexButton extends ISimpleButton {
    shiftText : string | Component,
    altText : string | null | Component
}
