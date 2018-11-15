import { Component, OnInit, Input } from '@angular/core';
import { Film } from '../filme';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.scss']
})
export class FilmDetailComponent implements OnInit {

    @Input() film: Film;

    constructor() { }

    ngOnInit() {
    }

}
