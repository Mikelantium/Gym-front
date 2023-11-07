import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ClassI } from 'src/app/models/interfaces';
import { ClassService } from 'src/app/shared/services/class.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-class',
  templateUrl: './edit-class.component.html',
  styleUrls: ['./edit-class.component.scss']
})
export class EditClassComponent implements OnInit{
  id!: any;
  clase!: ClassI;
  classForm!: FormGroup;
  submited: boolean = false;

  constructor(private classApi: ClassService, private form: FormBuilder, private router: Router){
    this.clase = {...this.classApi.getClass()}
    this.id = this.classApi.getID()
  }
    

  ngOnInit(): void {
    this.classForm = this.form.group({
      name: [this.clase.name, Validators.required],
      duration: [this.clase.duration, Validators.required],
      class: [this.clase.class],
      type: [this.clase.type],
      img: [this.clase.img, Validators.required]
    })

    this.classForm.valueChanges.subscribe((data)=> {
      this.clase = {...data}
    })

  }

    editClass(){

      this.submited= true;
    if (this.classForm.valid){
      this.classApi.putClass(this.clase, this.id).subscribe((data)=>{
        console.log(data);

      this.classForm.reset();
      this.submited = false;
      this.router.navigate(["/clases"])
      })
      
    }

  }
 

  
}
