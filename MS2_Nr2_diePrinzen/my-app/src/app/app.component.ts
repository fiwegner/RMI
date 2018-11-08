import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
    title = 'test';
    modified = null;
    ident = 1;
    filmTitel = 'Venom';
    eJahr = 2018;
    genre = 'Action';
    studio = 'Columbia Pictures';
    bspActor = 'Tom Hardy';
    filme = [
    {
        'ident': 1,
        'filmTitel': 'Venom',
        'eJahr': 2018,
        'genre': 'Action',
        'studio': 'Columbia Pictures',
        'bspActor': 'Tom Hardy'
    },
    {
        'ident': 2,
        'filmTitel': 'Halloween',
        'eJahr': 2018,
        'genre': 'Horror',
        'studio': 'Universal Pictures',
        'bspActor': 'Jamie Lee Curtis'
    },
    {
        'ident': 3,
        'filmTitel': 'Creed',
        'eJahr': 2015,
        'genre': 'Drama',
        'studio': 'Warner Bros.',
        'bspActor': 'Michael B. Jordan'
    },
    {
        'ident': 4,
        'filmTitel': 'Zootopia',
        'eJahr': 2016,
        'genre': 'Animation',
        'studio': 'Walt Disney Animation Studios',
        'bspActor': 'Ginnifer Goodwin'
    },
    {
        'ident': 5,
        'filmTitel': '12 Years a Slave',
        'eJahr': 2013,
        'genre': 'Drama',
        'studio': 'Fox Searchlight',
        'bspActor': 'Chiwetel Ejiofor'
    }
    ]

    constructor() {
        if(localStorage.getItem('filme')) {
            this.filme = JSON.parse(localStorage.getItem('filme'));
        }
    }

    fillLocalStorage() {
        localStorage.setItem('filme', JSON.stringify(this.filme));
    }

    bearbeiten(i) {
        this.modified = i;
        this.ident = this.filme[i].ident;
        this.filmTitel = this.filme[i].filmTitel;
        this.eJahr = this.filme[i].eJahr;
        this.genre = this.filme[i].genre;
        this.studio = this.filme[i].studio;
        this.bspActor = this.filme[i].bspActor;
    }

    speichern() {
        if (this.modified == null)
        {
            this.filme.push(
                    {
                            'ident': this.ident,
                            'filmTitel': this.filmTitel,
                            'eJahr': this.eJahr,
                            'genre': this.genre,
                            'studio': this.studio,
                            'bspActor': this.bspActor
                    }
            );
        }
	else
        {
            this.filme[this.modified].ident = this.ident;
            this.filme[this.modified].filmTitel = this.filmTitel;
            this.filme[this.modified].eJahr = this.eJahr;
            this.filme[this.modified].genre = this.genre;
            this.filme[this.modified].studio = this.studio;
            this.filme[this.modified].bspActor = this.bspActor;

        }
        this.modified = null;
        this.ident = null;
        this.filmTitel = '';
        this.eJahr = null;
        this.genre = '';
        this.studio = '';
        this.bspActor = '';
        this.fillLocalStorage();
    }

    loeschen(i) {
        this.filme.splice(i, 1);
        this.fillLocalStorage();
    }
}
