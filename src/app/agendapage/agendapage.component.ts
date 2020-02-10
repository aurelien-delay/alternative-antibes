import { Component, OnInit } from '@angular/core';
import { AgendacontentService } from '../agendacontent.service';

@Component({
  selector: 'app-agendapage',
  templateUrl: './agendapage.component.html',
  styleUrls: ['./agendapage.component.scss']
})
export class AgendapageComponent implements OnInit {

  constructor(private agendacontentService: AgendacontentService) { }
  agendacontent: Array<Object>;
  tractagelist: Array<Object>;
  appartlist: Array<Object>;

  ngOnInit() {
    this.agendacontent = this.agendacontentService.initContent();
    this.tractagelist = this.filter(this.agendacontent, 'T');
    this.appartlist = this.filter(this.agendacontent, 'R');
  }

  // filterTractage(list: Object[]): Object[] {
  filter(list, type) {
    let output = [];
    let tomorrow = new Date(); tomorrow.setDate(tomorrow.getDate() - 1);
    list.forEach(element => {
      let pushitem = (element.type === type);
      pushitem = pushitem && (element.date > tomorrow );
      if (pushitem) { output.push(element); }
    });
    return output;
  }

  isBefore(datestr) {
    let date = new Date(datestr);
    return ( new Date() <= date );
  }

}
