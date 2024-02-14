import { Component, DebugElement } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'

import { FormControl, ReactiveFormsModule } from '@angular/forms'
import { TrimOnBlurDirective } from './trim-on-blur.directive'

@Component({
  template: `<input appTrimOnBlur [formControl]="formControl" />`,
})
class HostComponent {
  formControl = new FormControl()
}

describe('TrimOnBlurDirective', () => {
  let component: HostComponent
  let fixture: ComponentFixture<HostComponent>
  let input: DebugElement
  let directive: TrimOnBlurDirective

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HostComponent],
      imports: [TrimOnBlurDirective, ReactiveFormsModule],
    }).compileComponents()

    fixture = TestBed.createComponent(HostComponent)
    component = fixture.componentInstance
    input = fixture.debugElement.query(By.css('input'))
    directive = input.injector.get(TrimOnBlurDirective)
    fixture.detectChanges()
  })

  it('should create host component', () => {
    expect(component).toBeTruthy()
  })

  it('should have directive', () => {
    expect(directive).toBeTruthy()
  })

  it('should not trim value on blur without control', () => {
    const text = '  test  '

    input.nativeElement.value = text
    input.triggerEventHandler('blur')

    expect(input.nativeElement.value).toBe(text)
  })

  it('should trim value on blur when control exists', () => {
    const text = '  test  '

    component.formControl.setValue(text)
    input.nativeElement.value = text
    input.triggerEventHandler('blur')

    expect(input.nativeElement.value).toBe(text.trim())
  })
})
