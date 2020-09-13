import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BoxDemo';

  public widgetIds: Array<number> = [];
  public id = 1;
  widgetElement = null;
  selectedWidgetId: number = null;
  isToggleChecked = true;

  addWidget() {
    this.widgetIds.push(this.id++);

  }

  toggleControl(event) {
    console.log("In toggle control", event.target.checked);
    this.isToggleChecked = event.target.checked;
  }

  onClickWidget(id) {
    this.selectedWidgetId = id;
    this.widgetElement = document.getElementById(id);

    console.log("Widget Clicked", this.widgetElement.offsetLeft);

    
    if (this.widgetElement.style.left == "" && this.widgetElement.style.top == "") {
      this.widgetElement.style.left = '10px';
      this.widgetElement.style.top = '30px';
    }

  }


  @HostListener('document:keydown', ['$event'])
  getKeyAndMove(e: KeyboardEvent) {
    if (this.isToggleChecked) {
      console.log("Move", e.which);
      var key_code = e.which || e.keyCode;
      switch (key_code) {
        case 37:
        case 65: //left arrow key
          this.moveLeft();
          break;
        case 38:
        case 87: //Up arrow key
          this.moveUp();
          break;
        case 39:
        case 68: //right arrow key
          this.moveRight();
          break;
        case 40:
        case 83: //down arrow key
          this.moveDown();
          break;
        case 46:
          this.deleteWidget();
          break;
      }
    }
  }
  moveLeft() {
    if (this.widgetElement.offsetLeft > 10)
      this.widgetElement.style.left = parseInt(this.widgetElement.style.left) - 5 + 'px';
  }
  moveUp() {
    if (this.widgetElement.offsetTop > 30)
      this.widgetElement.style.top = parseInt(this.widgetElement.style.top) - 5 + 'px';
  }
  moveRight() {
    if (this.widgetElement.offsetLeft < 405)
      this.widgetElement.style.left = parseInt(this.widgetElement.style.left) + 5 + 'px';
  }
  moveDown() {
    if (this.widgetElement.offsetTop < 430)
      this.widgetElement.style.top = parseInt(this.widgetElement.style.top) + 5 + 'px';
  }

  deleteWidget() {
    const index = this.widgetIds.indexOf(this.selectedWidgetId, 0);
    if (index > -1) {
      this.widgetIds.splice(index, 1); //remove selected element from array
    }
  }

}
