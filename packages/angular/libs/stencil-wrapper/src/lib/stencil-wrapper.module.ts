import {NgModule } from '@angular/core';
import { DIRECTIVES } from './index';

@NgModule({
declarations: [
    ...DIRECTIVES
],
imports: [
],
exports: [
    ...DIRECTIVES
]
})
export class StencilWrapperModule { }