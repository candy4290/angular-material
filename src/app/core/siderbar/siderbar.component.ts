import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { OverlayContainer } from '@angular/cdk/overlay';
/**
 * @title Basic table
 */
@Component({
  selector: 'app-siderbar',
  styleUrls: ['./siderbar.component.scss'],
  templateUrl: './siderbar.component.html',
})
export class SiderbarComponent implements OnInit {
  today: any; // 当前日（1-31）
  todayIcon: any; // 当前日的图标名
  @Output() navClick = new EventEmitter<any>();
  constructor(private router: Router, private oc: OverlayContainer) {
    this.today =  new Date().getDate();
    this.todayIcon = `日历${this.today}`;
  }
  ngOnInit() {
    // this.oc.getContainerElement().classList.add('myapp-dark-theme');
  }
  // 导航到项目页
  go() {
    this.router.navigate(['/project']);
    this.navClick.emit();
  }
  go1() {
    this.router.navigate(['/login']);
    this.navClick.emit();
  }
  go2() {
    this.router.navigate(['/tasklist']);
    this.navClick.emit();
  }
}


