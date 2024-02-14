import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PokemonSearchInputComponent } from './pokemon-search-input.component'

describe('PokemonSearchInputComponent', () => {
  let component: PokemonSearchInputComponent
  let fixture: ComponentFixture<PokemonSearchInputComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonSearchInputComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(PokemonSearchInputComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should emit inputChange event', () => {
    const inputChangeSpy = spyOn(component.inputChange, 'emit')

    const input = fixture.nativeElement.querySelector('input')
    input.value = '    pikachu    '
    input.dispatchEvent(new Event('input'))

    fixture.detectChanges()

    expect(inputChangeSpy).toHaveBeenCalledWith('pikachu')
  })
})
