import { Component } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FormControl, ReactiveFormsModule } from '@angular/forms'
import { MatFormFieldDirective } from './mat-form-field.directive'

import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import { MatErrorDirective } from './mat-error.directive'

@Component({
  template: `
    <mat-form-field>
      <input matInput [formControl]="inputControl" />
      <mat-error />
    </mat-form-field>
  `,
})
class HostComponent {
  inputControl = new FormControl()
}

describe('MatFormFieldDirective', () => {
  let component: HostComponent
  let fixture: ComponentFixture<HostComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HostComponent, MatFormFieldDirective, MatErrorDirective],
      imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule],
      providers: [provideAnimationsAsync()],
    }).compileComponents()

    fixture = TestBed.createComponent(HostComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create host component', () => {
    expect(component).toBeTruthy()
  })

  it('should have directive', () => {
    const directive = fixture.debugElement
      .query((el) => el.name === 'mat-form-field')
      .injector.get(MatFormFieldDirective)

    expect(directive).toBeTruthy()
  })
})
