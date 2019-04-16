import {Component, ViewChild, OnInit} from '@angular/core';
import { MatPaginator, MatSort,MatTableDataSource } from '@angular/material';
import { DataTableDataSource } from './data-table-datasource';
import { AnnoncesService } from '../annonces.service';
import { Router,ActivatedRoute } from '@angular/router';
import { LoginService } from '../login.service';
import { AuthGuard } from '../auth.guard';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  datas : any[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['id', 'annonce_id', 'date_jugement', 'siren', 'commentaires', 'dep', 'created_at', 'mandataires_tests'];
  dataSource: MatTableDataSource<any>;

  constructor(private annonces: AnnoncesService, private route: Router, private activeroute: ActivatedRoute) { }

  ngOnInit() {
    this.annonces.getAnnonces().subscribe(
      data=> {
        this.datas = data;
        console.log(this.datas);
        this.dataSource = new MatTableDataSource(this.datas);
        this.dataSource.paginator = this.paginator;

      });

  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
