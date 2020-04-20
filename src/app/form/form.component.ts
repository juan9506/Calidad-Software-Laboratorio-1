import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  name = '';
  id = '';
  gender = '';
  age = '';
  address = '';
  city = '';

  constructor(public db: AngularFireDatabase) { }

  ngOnInit(): void {
  }

  onSubmit(){
    var itemValue = 'Juanito';
    this.db.list('personas').push({name: this.name, id: this.id, gender: this.gender, age: this.age, address: this.address, city: this.city});
    
    this.name = '';
    this.id = '';
    this.gender = '';
    this.age = '';
    this.address = '';
    this.city = '';

    alert('Data Saved')
  }

}
