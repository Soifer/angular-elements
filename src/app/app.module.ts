

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [ButtonComponent],
  imports: [BrowserModule],
  entryComponents: [ButtonComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const customButton = createCustomElement(ButtonComponent, { injector });
    customElements.define('custom-button', customButton,);
  }
  ngDoBootstrap() {}
}


// import { NgModule, CUSTOM_ELEMENTS_SCHEMA }  from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { ButtonComponent }  from './button/button.component';

// @NgModule({
//     bootstrap: [ButtonComponent],
//     declarations: [ButtonComponent],
//     imports: [BrowserModule],
//     schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
// })
// export class AppModule { }

