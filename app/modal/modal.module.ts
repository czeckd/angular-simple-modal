import { NgModule, Type } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgStyle } from '@angular/common';

import { BaseModal, SimpleModal } from './index';

@NgModule({
	imports:         [ BrowserModule, FormsModule ],
	declarations:    [ BaseModal ],
	exports:         [ BaseModal ],
	entryComponents: [ BaseModal ],
	providers:       [ SimpleModal ]
})

export class ModalModule {
}