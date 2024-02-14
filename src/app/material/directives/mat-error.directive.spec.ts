import { Component, DebugElement } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'

import { MatErrorDirective } from './mat-error.directive'

@Component({
  template: `<mat-error />`,
})
class HostComponent {}

describe('MatErrorDirective', () => {
  let component: HostComponent
  let fixture: ComponentFixture<HostComponent>
  let directive: MatErrorDirective
  let matError: DebugElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HostComponent, MatErrorDirective],
    }).compileComponents()

    fixture = TestBed.createComponent(HostComponent)
    component = fixture.componentInstance
    matError = fixture.debugElement.query(By.css('mat-error'))
    directive = matError.injector.get(MatErrorDirective)
    fixture.detectChanges()
  })

  it('should create host component', () => {
    expect(component).toBeTruthy()
  })

  it('should have directive', () => {
    expect(directive).toBeTruthy()
  })

  it('should set text content for required errors', () => {
    const errors = { required: true }
    directive.setTextContent(errors)
    expect(matError.nativeElement.textContent).toBe('Campo es requerido')
  })

  it('should set text content for mask errors', () => {
    const errors = { mask: true }
    directive.setTextContent(errors)
    expect(matError.nativeElement.textContent).toBe('Formato inválido')
  })

  it('should not set text content for null errors', () => {
    const errors = null
    directive.setTextContent(errors)
    expect(matError.nativeElement.textContent).toBe('')
  })

  it('should set empty text content for undefined errors', () => {
    const errors = {}
    directive.setTextContent(errors)
    expect(matError.nativeElement.textContent).toBe('')
  })
})
