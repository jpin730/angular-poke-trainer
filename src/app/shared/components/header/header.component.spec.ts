import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PokeTrainerService } from '@core/services/poke-trainer.service'
import { HeaderComponent } from './header.component'

class MockedPokeTrainerService {}

describe('HeaderComponent', () => {
  let component: HeaderComponent
  let fixture: ComponentFixture<HeaderComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [
        { provide: PokeTrainerService, useClass: MockedPokeTrainerService },
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(HeaderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should have pokemon logo in img ngSrc', () => {
    const compiled = fixture.nativeElement
    expect(compiled.querySelector('img[ngSrc]').getAttribute('ngSrc')).toBe(
      'assets/images/pokemon-logo.svg',
    )
  })
})
