import { Component, OnInit, Input } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-candidat',
  templateUrl: './candidat.component.html',
  styleUrls: ['./candidat.component.scss']
})
export class CandidatComponent implements OnInit {

  @Input() candidat: any;

  constructor() { }
  photo: string;

  ngOnInit() {
    this.photo = "assets/candidats/" + this.candidat.prenom + this.candidat.nom + ".png";
  }

  ngAfterViewInit() {
    console.log("after init");
    // this.autoSizeText();
  }

  autoSizeText() {
    let elements = $('.resize')
    console.log(elements)
    if (elements.length < 0) return;

    /*
    elements.each( function(index, el) {
      console.log("el", el.innerText, el.scrollWidth, el.offsetWidth, $(el).find("span").css("width"));
      // console.log("*el", $(el).attr("scrollHeight"));
      // console.log("*this", $(this));
      let resizeText = function() {
        let elNewFontSize = (parseInt($(el).css('font-size').slice(0, -2)) - 1) + 'px'
        $(el).css('font-size', elNewFontSize)
      }

      let actualTextSize = parseInt($(el).find("span").css("width"));
      while (actualTextSize > el.offsetWidth) {
        console.log("resize again", actualTextSize, el.offsetWidth);
        resizeText();
        actualTextSize = parseInt($(el).find("span").css("width"));
      }
      console.log("end resizing", actualTextSize, el.offsetWidth);
    });
    */
    elements.each( function(index, el) {
      console.log("el", el.innerText, el.scrollHeight, el.offsetHeight, $(el).find("span").text() );
      // if ( $(el).find("span").text() === "Delcasse") { $(el).find("span").text("Superlongaraloange"); }
      let resizeText = function() {
        let elNewFontSize = (parseInt($(el).css('font-size').slice(0, -2)) - 1) + 'px'
        $(el).css('font-size', elNewFontSize)
      }

      let actualTextSize = parseInt($(el).find("span").css("width"));
      while (el.scrollHeight > el.offsetHeight || actualTextSize > el.offsetWidth) {
        console.log("resize again", el.scrollHeight, el.offsetHeight, actualTextSize, el.offsetWidth);
        resizeText();
        actualTextSize = parseInt($(el).find("span").css("width"));
      }
      console.log("end resizing", el.scrollHeight, el.offsetHeight, actualTextSize, el.offsetWidth);
    });
  }
}
