import { Component, OnInit } from '@angular/core';
import { AnnoncesService } from '../annonces.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.css']
})
export class AnnoncesComponent implements OnInit {
datas;
  constructor(private annonces: AnnoncesService, private route: Router) { }

  ngOnInit() {
    this.annonces.getAnnonces().subscribe((data) => {
      this.datas = data;
      console.log(this.datas);
    });
  }

}
