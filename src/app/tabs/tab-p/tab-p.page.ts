import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-p',
  templateUrl: './tab-p.page.html',
  styleUrls: ['./tab-p.page.scss'],
})
export class TabPPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isClick: boolean=true;
  isClick2: boolean=false;

  isClicked(){
    return this.isClick;
  }

  isClicked2(){
    return this.isClick2;
  }

  onClick(){
    if(this.isClick === true){
      return this.isClick;
    }
    else{
      this.isClick = true;
      this.isClick2 = false;
    }

  }

  onClick2(){
    if(this.isClick2 === true){
      return this.isClick2;
    }
    else{
      this.isClick2 = true;
      this.isClick = false;
    }
  }

}
