import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ClassI } from 'src/app/models/interfaces';
import { ClassService } from 'src/app/shared/services/class.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.scss']
})
export class AddClassComponent implements OnInit {
  classForm! : FormGroup;
  submited: boolean = false;
  clase!: ClassI;

  constructor (private form: FormBuilder, private classApi: ClassService, private router: Router){}

  ngOnInit(): void {
    this.classForm = this.form.group({
      name: ["", Validators.required],
      duration: ["", Validators.required],
      class: [""],
      type: [""],
      img: ["", Validators.required]
    })

    this.classForm.valueChanges.subscribe((data)=> {
        this.clase = {...data}
    })
  }

  addClass(){
    this.submited= true;
    if (this.classForm.valid){
      this.classApi.postClass(this.clase).subscribe((data)=>{
        console.log(data);

      this.classForm.reset();
      this.submited = false;
      this.router.navigate(["/clases"])
      })
      
    }
    
  }
}
