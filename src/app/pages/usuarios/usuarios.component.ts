import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClassService } from 'src/app/shared/services/class.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  registerForm!: FormGroup;
  submited: boolean = false;

  constructor(private form: FormBuilder, private api: ClassService, private router: Router){
  }

  ngOnInit(): void {
    this.registerForm = this.form.group({
      name: ["", [Validators.required]],
      age: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.pattern("^[^@]+@[^@]+\.[a-zA-Z]{2,}$")]],
      password:["", [Validators.required, Validators.pattern("(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}")]]
    })
  }

  registrar(){
    this.submited = true;
    if(this.registerForm.valid){
      console.log(this.registerForm.value);
      this.api.register(this.registerForm.value).subscribe((data) =>{
        console.log(data);
        this.router.navigate(['/login'])
      })
      
    }
  }
}
