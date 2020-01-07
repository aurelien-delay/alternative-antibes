import { Component, OnInit, HostListener, ViewChild, ElementRef } from "@angular/core";
import { AgendacontentService } from '../agendacontent.service';

@Component({
  selector: "app-agenda",
  templateUrl: "./agenda.component.html",
  styleUrls: ["./agenda.component.scss"]
})
export class AgendaComponent implements OnInit {

  public navIsFixed: boolean = false;
  agendacontent: Array<Object>;
  

  constructor(private agendacontentService: AgendacontentService) {
   }

  ngOnInit() {
    this.agendacontent = this.agendacontentService.initContent();
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    // calcule automatiquement la place de l"agenda pour qu"il reste fixe 
    // une fois que l"utilisateur a scroller en dessous de sa place initiale.
    let agenda = $("#agenda");
    let limit = $("#texterassemblement").offset().top;
    let totalheight = $("#texterassemblement").height() + $("#axes").height();
    let diff = Math.max(limit - $(window).scrollTop(), 0);
    agenda.css({top: diff.toString() + "px"});
  }
}
