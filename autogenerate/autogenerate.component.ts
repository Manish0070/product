import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-autogenerate',
  templateUrl: './autogenerate.component.html',
  styleUrls: ['./autogenerate.component.css']
})
export class AutogenerateComponent implements OnInit {
  // private role:Number;
// 1st meathod
  // roles = ['Role1', 'Role2', 'Role3'];
  // activeLink = this.roles[0];
  // background = 'primary';


  tabs = ['Role 1', 'Role 2', 'Role 3'];
  selected = new FormControl(0);
  constructor() { }

  ngOnInit() {
  }

    // number=2;

// 1st meathod
  // addLink() {
  //   this.roles.push(`Link ${this.roles.length + 1}`);
  // }



  addTab() {
    this.tabs.push('Role ');

      this.selected.setValue(this.tabs.length - 1);
   
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }


}
