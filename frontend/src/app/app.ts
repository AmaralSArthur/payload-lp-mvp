import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DsModule } from '@githubanotaai/design-system';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DsModule],
  template: `<router-outlet />`,
  styles: [],
})
export class AppComponent {}
