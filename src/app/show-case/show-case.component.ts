import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-case',
  templateUrl: './show-case.component.html',
  styleUrls: ['./show-case.component.css']
})
export class ShowCaseComponent implements OnInit {

  userName: string = "";
  userNameEmpty : boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  resetButton(){
    this.userName=""
  }

  checkUserName(event:any){
  event.target.value == "" ? this.userNameEmpty = true : this.userNameEmpty = false    
  console.log(this.userNameEmpty)
  }

}
