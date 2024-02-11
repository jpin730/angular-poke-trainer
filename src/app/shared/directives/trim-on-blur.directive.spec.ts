import { Component } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'

import { TrimOnBlurDirective } from './trim-on-blur.directive'

@Component({
  template: `<input appTrimOnBlur />`,
})
class HostComponent {}

describe('TrimOnBlurDirective', () => {
  let component: HostComponent
  let fixture: ComponentFixture<HostComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HostComponent],
      imports: [TrimOnBlurDirective],
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
      .query((el) => el.name === 'input')
      .injector.get(TrimOnBlurDirective)

    expect(directive).toBeTruthy()
  })
})
