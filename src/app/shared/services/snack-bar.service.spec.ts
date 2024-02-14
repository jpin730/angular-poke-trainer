import { TestBed } from '@angular/core/testing'

import { MatSnackBar } from '@angular/material/snack-bar'
import { SnackBarService } from './snack-bar.service'

describe('SnackBarService', () => {
  let service: SnackBarService
  const snackBarSpy = jasmine.createSpyObj('MatSnackBar', ['open'])

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: MatSnackBar, useValue: snackBarSpy }],
    })
    service = TestBed.inject(SnackBarService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should have a default duration of 3000', () => {
    expect(service.config.duration).toBe(3000)
  })

  it('should open a snackbar with a message and a default action', () => {
    service.open('test message')

    expect(snackBarSpy.open).toHaveBeenCalledWith('test message', 'Cerrar', {
      duration: 3000,
    })
  })
})
