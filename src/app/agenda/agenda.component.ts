import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
// import { DOCUMENT } from "@angular/platform-browser";

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {

  public navIsFixed: boolean = false;
  agendacontent: Array<Object>;
  

  constructor(private window: Window) {
    this.agendacontent = this.initContent();
   }

  ngOnInit() {}

  @HostListener("window:scroll", [])
  onWindowScroll() {
    // calcule automatiquement la place de l'agenda pour qu'il reste fixe 
    // une fois que l'utilisateur a scroller en dessous de sa place initiale.
    let agenda = $("#agenda");
    let limit = $("#texterassemblement").offset().top;
    let totalheight = $("#texterassemblement").height() + $("#axes").height();
    let diff = Math.max(limit - this.window.pageYOffset, 0);
    agenda.css({top: diff.toString() + 'px'/*, height: totalheight.toString() + 'px'*/});
  }

  public initContent() {
    let output = [
      {type: 'Manif',               date: new Date('09SEP20 11:00:00'),                                     lieu: 'Place Garibaldi à Nice',                 texte: 'blabla'},
      {type: 'Rencontre',           date: new Date('13SEP20 08:30:00'), fin: new Date('13SEP20 10:00:00'),  lieu: 'Place Garibaldi à Nice',                 texte: 'blabla2'},
    ];
    // type: permanence, espace rencontre, manif, tractage, reunion publique, inauguration, vote
    console.log("output", output);
    return output;
  }

}
