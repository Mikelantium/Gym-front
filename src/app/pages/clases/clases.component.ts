import { Component, OnInit } from '@angular/core';
import { ClassI } from 'src/app/models/interfaces';
import { ClassService } from 'src/app/shared/services/class.service';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.scss']
})
export class ClasesComponent implements OnInit {
  listado!: ClassI[];

  constructor(public classApi: ClassService ){}

  ngOnInit(): void {
    this.classApi.getClases().subscribe((data: any) => {
      this.listado = [...data]
    })
  }
}
