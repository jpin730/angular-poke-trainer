import { NgModule } from '@angular/core'

import { LuxonDateModule } from '@angular/material-luxon-adapter'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatButtonModule } from '@angular/material/button'
import { MatChipsModule } from '@angular/material/chips'
import {
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  MatDateFormats,
  MatRippleModule,
} from '@angular/material/core'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatTooltipModule } from '@angular/material/tooltip'

import { MatErrorDirective } from './directives/mat-error.directive'
import { MatFormFieldDirective } from './directives/mat-form-field.directive'

const APP_DATE_FORMATS: MatDateFormats = {
  parse: {
    dateInput: 'yyyy-MM-dd',
  },
  display: {
    dateInput: 'dd/MMM/yyyy',
    monthYearLabel: 'MMMM yyyy',
    dateA11yLabel: 'MMM',
    monthYearA11yLabel: 'MMMM yyyy',
  },
}

const directives = [MatErrorDirective, MatFormFieldDirective]

@NgModule({
  declarations: [...directives],
  exports: [
    ...directives,
    LuxonDateModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatChipsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTooltipModule,
    MatRippleModule,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es' },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS },
  ],
})
export class MaterialModule {}
