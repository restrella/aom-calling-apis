import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CanComponentDeactivate } from '../guards/deactivate.guard';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss'],
})
export class ThirdComponent implements OnInit, CanComponentDeactivate {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log('from third comp', this.route.snapshot.queryParams);
  }

  canDeactivate() {
    const confirmation = window.confirm(
      'Are you sure you want to redirect out of this page?'
    );
    return confirmation;
  }
}
