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

  ngOnInit() {
    this.agendacontent = this.agendacontentService.initContent();
    this.tractagelist = this.filterTractage(this.agendacontent);
  }

  // filterTractage(list: Object[]): Object[] {
  filterTractage(list) {
    let output = [];
    list.forEach(element => {
      let pushitem = (element.type === 'T');
      pushitem = pushitem && (element.date > new Date() );
      if (pushitem) { output.push(element); }
    });
    return output;
  }

  isBefore(datestr) {
    let date = new Date(datestr);
    return ( new Date() <= date );
  }

}
