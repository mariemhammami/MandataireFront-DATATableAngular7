import { Component, OnInit } from '@angular/core';
import { AnnoncesService } from '../annonces.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MandataireService } from '../mandataire.service';

@Component({
  selector: 'app-mandataire',
  templateUrl: './mandataire.component.html',
  styleUrls: ['./mandataire.component.css']
})
export class MandataireComponent implements OnInit {
  id; datas;
  constructor(private annonces: AnnoncesService, private route: ActivatedRoute, private mandat: MandataireService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.mandat.getMandataireID(this.id).subscribe(data => {
      this.datas = data;
      console.log(this.datas);
    });
  }

}
