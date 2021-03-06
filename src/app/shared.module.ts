import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatOptionModule, MatSelectModule} from '@angular/material';

@NgModule({
    imports: [
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        MatTableModule,
        MatSelectModule,
        MatOptionModule
    ],
    exports: [
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        MatTableModule,
        MatSelectModule,
        MatOptionModule
    ]
})
export class SharedModule {
}
