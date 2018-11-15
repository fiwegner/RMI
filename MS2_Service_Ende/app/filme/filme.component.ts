import { Component, OnInit } from '@angular/core';
import { Film } from '../filme';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.scss']
})
export class FilmeComponent implements OnInit {

    filme: Film[];
    selectedFilm: Film;
    tmpFilm: Film = {
        filmTitel: '12 Years a Peter',
        eJahr: 2013,
        genre: 'Drama',
        studio: 'Fox Searchlight',
        bspActor: 'Peter'
    };

    onSelect(film: Film): void{
        this.selectedFilm = film;
    }

    constructor(private filmService: FilmService) {
    }

    ngOnInit() {
        this.getFilmListe();
    }

    getFilmListe(): void {
        this.filmService.getFilmListe().subscribe(filmliste => this.filme = filmliste);
    }

    add() {
        this.filmService.add(this.tmpFilm);
        location.reload();
    }

    edit(i) {
        this.filmService.edit(this.selectedFilm, i);
        location.reload();
    }

    delete(i) {
        this.filmService.delete(i);
        location.reload();
    }
    
    wipe() {
        this.filmService.wipe();
        location.reload();
    }
}
