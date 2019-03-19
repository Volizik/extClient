import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {NotFaundComponent} from './not-faund/not-faund.component';

import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared.module';

@NgModule({
    declarations: [
        AppComponent,
        NotFaundComponent
    ],
    imports: [
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        SharedModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
