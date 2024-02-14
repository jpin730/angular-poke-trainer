import { Component, DebugElement } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FormControl, ReactiveFormsModule } from '@angular/forms'
import { By } from '@angular/platform-browser'
import { MatFormFieldDirective } from './mat-form-field.directive'

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
  let directive: MatFormFieldDirective
  let matFormField: DebugElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HostComponent, MatFormFieldDirective, MatErrorDirective],
      imports: [ReactiveFormsModule, MatInputModule],
      providers: [provideAnimationsAsync()],
    }).compileComponents()

    fixture = TestBed.createComponent(HostComponent)
    component = fixture.componentInstance
    matFormField = fixture.debugElement.query(By.css('mat-form-field'))
    directive = matFormField.injector.get(MatFormFieldDirective)
    fixture.detectChanges()
  })

  it('should create host component', () => {
    expect(component).toBeTruthy()
  })

  it('should have directive', () => {
    expect(directive).toBeTruthy()
  })

  it('should call setTextContent on error state changes', () => {
    const spy = spyOn(directive.matError, 'setTextContent')

    component.inputControl.setErrors({ required: true })

    component.inputControl.markAsTouched()

    fixture.detectChanges()

    expect(spy).toHaveBeenCalledOnceWith({ required: true })

    spy.calls.reset()
  })

  it('should not call setTextContent on error state changes when no errors', () => {
    const spy = spyOn(directive.matError, 'setTextContent')

    component.inputControl.setErrors(null)

    component.inputControl.markAsTouched()

    fixture.detectChanges()

    expect(spy).not.toHaveBeenCalled()

    spy.calls.reset()
  })
})
