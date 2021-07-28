import { Component, OnInit } from '@angular/core';
import { faSkullCrossbones, faShare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {


  // FONTAWESOME ICONS
  faSkullCrossbones = faSkullCrossbones;
  faShare = faShare;
  constructor() { }

  ngOnInit(): void {
  }

}
