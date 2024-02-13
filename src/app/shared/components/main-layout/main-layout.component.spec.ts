import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  flush,
} from '@angular/core/testing'
import { Router } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'

import { PokeTrainerService } from '@core/services/poke-trainer.service'
import { MainLayoutComponent } from './main-layout.component'

class MockedPokeTrainerService {}

describe('MainLayoutComponent', () => {
  let component: MainLayoutComponent
  let fixture: ComponentFixture<MainLayoutComponent>
  let router: Router

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainLayoutComponent, RouterTestingModule],
      providers: [
        { provide: PokeTrainerService, useClass: MockedPokeTrainerService },
      ],
    }).compileComponents()

    router = TestBed.inject(Router)
    fixture = TestBed.createComponent(MainLayoutComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should render app-loader on loading = true', fakeAsync(() => {
    const compiled = fixture.nativeElement
    expect(component.loading).toBeTrue()
    expect(compiled.querySelector('app-loader')).toBeTruthy()
  }))

  it('should render router-outlet in main tag on loading = false', fakeAsync(() => {
    router.navigate(['/'])
    flush()
    const compiled = fixture.nativeElement
    expect(component.loading).toBeFalse()
    expect(compiled.querySelector('main router-outlet')).toBeTruthy()
  }))

  it('should render app-header in header tag', () => {
    const compiled = fixture.nativeElement
    expect(compiled.querySelector('header app-header')).toBeTruthy()
  })
})
