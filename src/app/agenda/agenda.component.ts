import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
// import { DOCUMENT } from "@angular/platform-browser";

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {

  public navIsFixed: boolean = false;

  constructor(private window: Window) { }

  ngOnInit() {}

  @HostListener("window:scroll", [])
  onWindowScroll() {
    // calcule automatiquement la place de l'agenda pour qu'il reste fixe 
    // une fois que l'utilisateur a scroller en dessous de sa place initiale.
    let agenda = $("#agenda");
    let limit = $("#debutpage").offset().top;
    let diff = Math.max(limit - this.window.pageYOffset, 0);
    agenda.css({top: diff.toString() + 'px' });
  }

}
