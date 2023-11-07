import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClassI, UserI } from 'src/app/models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  url:string ="https://gym-angular-back.vercel.app/class";
  url2: string="https://gym-angular-back.vercel.app/users";
  id!: any;
  clase!: ClassI;
  user!: UserI;
  

  constructor(private http: HttpClient) { }

  register(user: UserI){
    return this.http.post(`${this.url2}/register`, user)
  }

  login(user: UserI){
    return this.http.post(`${this.url2}/login`, user)
  }

  getToken(){
    return localStorage.getItem('token')
  }


  isAdminRole(){
    const usuario = localStorage.getItem("user")
    if (usuario){
      const objetoUser: any = JSON.parse(usuario)
      if
        (objetoUser.role ==="admin"){
          console.log(objetoUser.role)
          return true
        } else return false
      } else return false
      
    } 
    
  
    
  


  
  logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }

  getClases(){
   return this.http.get(this.url)
  }

  getClassByID (id: string){
    return this.http.get(`${this.url}/${id}`)
  }

  postClass(clase: ClassI){
    return this.http.post(this.url, clase)
  }

  putClass (clase: ClassI, id:string){
    return this.http.put(`${this.url}/${id}`, clase)
  }

  deleteClass (id: string){
    return this.http.delete(`${this.url}/${id}`)
  }

  setClass(clase: ClassI, id: string){
    this.clase = {...clase}
    this.id = id;
  }

  getClass(){
    return this.clase
  }
  getID (){
    return this.id
  }
}
