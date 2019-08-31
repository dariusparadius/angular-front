import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-go-top-button',
  templateUrl: './go-top-button.component.html',
  styleUrls: ['./go-top-button.component.css']
})
export class GoTopButtonComponent implements OnInit {

  constructor() { }


  ngOnInit() {
    let backToTopButton = <HTMLElement>document.querySelector(".gotopbtn");
    window.addEventListener("scroll", scrollfunction);
    backToTopButton.addEventListener('click', backTotop);

    function backTotop() {
      window.scrollTo(0, 0);
    }

    function scrollfunction(){
      if(window.pageYOffset > 300){
        backToTopButton.style.display = "block";
      }else{
        backToTopButton.style.display = "none";
      }
    }
  }



}
