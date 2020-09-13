import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {
 
  @Input() id:number;
  @Input() isSelected:boolean;
  @Input() zindex:number;


  constructor() { }

  ngOnInit(): void {
    console.log("id from wudget " ,this.id)
 
  }

  
}
