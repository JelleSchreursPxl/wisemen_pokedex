import { Component, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pokemon-navigationbar',
  templateUrl: './pokemon-navigationbar.component.html',
  styleUrls: ['./pokemon-navigationbar.component.scss']
})
export class PokemonNavigationbarComponent implements OnInit {
  faChevronLeft = faChevronLeft;
  faHeart = faHeart;

  constructor() { }
  ngOnInit(): void {
  }

}
