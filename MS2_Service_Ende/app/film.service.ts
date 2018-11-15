import { Injectable } from '@angular/core';

import { Film } from './filme';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

    filmliste: Film[] = [
    {
        filmTitel: 'Venom',
        eJahr: 2018,
        genre: 'Action',
        studio: 'Columbia Pictures',
        bspActor: 'Tom Hardy'
    },
    {
        filmTitel: 'Halloween',
        eJahr: 2018,
        genre: 'Horror',
        studio: 'Universal Pictures',
        bspActor: 'Jamie Lee Curtis'
    },
    {
        filmTitel: 'Creed',
        eJahr: 2015,
        genre: 'Drama',
        studio: 'Warner Bros.',
        bspActor: 'Michael B. Jordan'
    },
    {
        filmTitel: 'Zootopia',
        eJahr: 2016,
        genre: 'Animation',
        studio: 'Walt Disney Animation Studios',
        bspActor: 'Ginnifer Goodwin'
    },
    {
        filmTitel: '12 Years a Slave',
        eJahr: 2013,
        genre: 'Drama',
        studio: 'Fox Searchlight',
        bspActor: 'Chiwetel Ejiofor'
    }
    ]

    constructor() {
        if (localStorage.getItem('filmliste'))
            {
                this.filmliste = JSON.parse(localStorage.getItem('filmliste'));
            }
    }
    
    getFilmListe(): Observable<Film[]> {
        return of(this.filmliste);
    }

    add(film) {
        this.filmliste.push(film);
        window.localStorage.setItem('filmliste', JSON.stringify(this.filmliste));
    }

    delete(i) {
        this.filmliste.splice(i, 1);
        window.localStorage.setItem('filmliste', JSON.stringify(this.filmliste));
    }

    edit(film, i) {
        this.filmliste[i] = film;
        window.localStorage.setItem('filmliste', JSON.stringify(this.filmliste));
    }

    wipe() {
        window.localStorage.clear();
    }

}
