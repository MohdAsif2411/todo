import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import {
} from '@angular/material';
import { AppInputComponent } from './controls/app-input/app-input.component';
import { AppSelectComponent } from './controls/app-select/app-select.component';
import { AppTableComponent } from './controls/app-table/app-table.component';
import { AppDateComponent } from './controls/app-date/app-date.component';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatChipsModule} from '@angular/material/chips';





const materialModules = [
  MatButtonModule, MatOptionModule, MatDialogModule, MatSnackBarModule,
  MatSelectModule, MatInputModule, MatCardModule, MatIconModule, MatRadioModule,
  MatTableModule, MatPaginatorModule, MatSortModule, MatAutocompleteModule,
  MatDatepickerModule, MatNativeDateModule, MatChipsModule,
]

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ...materialModules
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    ...materialModules,

    AppInputComponent, AppSelectComponent, AppTableComponent, AppDateComponent,
  ],
  declarations: [AppInputComponent, AppSelectComponent, AppTableComponent, AppDateComponent]
})
export class SharedModule {
}
