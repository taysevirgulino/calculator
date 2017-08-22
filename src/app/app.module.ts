import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        BrowserModule,
        NgbModule.forRoot(),
        ReactiveFormsModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
