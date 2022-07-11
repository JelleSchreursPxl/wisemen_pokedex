import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonNavigationbarComponent } from './pokemon-navigationbar.component';

describe('PokemonNavigationbarComponent', () => {
  let component: PokemonNavigationbarComponent;
  let fixture: ComponentFixture<PokemonNavigationbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonNavigationbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonNavigationbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
