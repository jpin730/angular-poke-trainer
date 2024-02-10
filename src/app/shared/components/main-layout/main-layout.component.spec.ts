import { ComponentFixture, TestBed } from '@angular/core/testing'

import { MainLayoutComponent } from './main-layout.component'

describe('MainLayoutComponent', () => {
  let component: MainLayoutComponent
  let fixture: ComponentFixture<MainLayoutComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainLayoutComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(MainLayoutComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should render router-outlet in main tag', () => {
    const compiled = fixture.nativeElement
    expect(compiled.querySelector('main router-outlet')).toBeTruthy()
  })
})
