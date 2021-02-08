import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl:'./test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {




  @Input('parentData') public name;

  @Output() public childEvent= new EventEmitter();

  fireEvent(){
    this.childEvent.emit("Hey thre!! I'm using Codevolution");
  }

  public styling="text-success";

  public hasError=false;
  public isSpecial=true;

  public displayName=false;

  public colors=["red","blue","orange","purple"];

  public titleStyles={
    color:"blue",
    fontStyle:"italic"
  }

  public messages={
    "text-success":!this.hasError,
    "text-danger":this.hasError,
    "text-special":this.isSpecial
  }
  public greeting="";
  onClick(value){
    console.log(value);
  }



  constructor() { }

  ngOnInit(): void {
  }

  greetUser(){
    return "Hello ";
  }

}
