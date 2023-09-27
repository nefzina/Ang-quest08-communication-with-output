import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Ang-quest08-communication-with-output';

  onomatopoeiaList: string[] = [];

  onReceiveNewOnomatopia(newOnomatopia: string): void {
    this.onomatopoeiaList.push(newOnomatopia);
  }
}
