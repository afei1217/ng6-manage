import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'head-top',
  templateUrl: './head-top.component.html',
  styleUrls: ['./head-top.component.less']
})
export class HeadTopComponent implements OnInit {

  private datas:string[] = ['首页'];
  constructor(
    private activeRoute:ActivatedRoute
  ) { }

  ngOnInit() {
    let snapshotData = this.activeRoute.snapshot.data;
    for (const key in snapshotData) {
      this.datas.push(snapshotData[key]);
    }
  }

}
