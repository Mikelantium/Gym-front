import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClassService } from 'src/app/shared/services/class.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit{
  loginForm!: FormGroup;
  submited: boolean = false;

  constructor(private form: FormBuilder, private api: ClassService, private router: Router){}
  ngOnInit(): void {
    this.loginForm = this.form.group({
      email: ["", [Validators.required, Validators.pattern("^[^@]+@[^@]+\.[a-zA-Z]{2,}$")]],
      password:["", [Validators.required, Validators.pattern("(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}")]]
    })
  }
  login(){
    this.submited = true;
    if(this.loginForm.valid){
      this.api.login(this.loginForm.value).subscribe((data:any) =>{
        console.log(data)
        alert("Que maquina, te logueaste!")
        localStorage.setItem('token', data.token)
        localStorage.setItem('user', JSON.stringify(data.user))
        this.router.navigate(['/clases']);
      })
    }
  }

}
