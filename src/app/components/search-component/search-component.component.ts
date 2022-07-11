import { ApiService } from './../../service/api.service';
import { Component, Input, OnInit } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Subject, Observable, debounceTime, switchMap } from 'rxjs';
import { Pokemon } from 'src/app/interfaces/Pokemon';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.scss']
})
export class SearchComponent implements OnInit {
  faMagnifyingGlass = faMagnifyingGlass;
  pokemon$!: Observable<Pokemon[]>;
  private searchValue = new Subject<string>;

  constructor(private api: ApiService) { }

  search(term: string): void {
    this.searchValue.next(term);
  }

  ngOnInit(): void {
    this.pokemon$ = this.searchValue.pipe(
      debounceTime(300),
      switchMap((term: string) => this.api.searchPokemon(term))
    )
  }
}