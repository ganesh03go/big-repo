import { Component, OnInit } from '@angular/core';
import { Feature11Facade } from '@demo/domain8/domain';

@Component({
  selector: 'domain8-feature11',
  templateUrl: './feature11.component.html',
  styleUrls: ['./feature11.component.scss'],
})
export class Feature11Component implements OnInit {
  entity11List$ = this.feature11Facade.entity11List$;

  constructor(private feature11Facade: Feature11Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.feature11Facade.load();
  }
}
