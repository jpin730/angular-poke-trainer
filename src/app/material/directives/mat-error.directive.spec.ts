import { Component } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'

import { MatErrorDirective } from './mat-error.directive'

@Component({
  template: `<mat-error />`,
})
class HostComponent {}

describe('MatErrorDirective', () => {
  let component: HostComponent
  let fixture: ComponentFixture<HostComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HostComponent, MatErrorDirective],
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
      .query((el) => el.name === 'mat-error')
      .injector.get(MatErrorDirective)

    expect(directive).toBeTruthy()
  })
})
