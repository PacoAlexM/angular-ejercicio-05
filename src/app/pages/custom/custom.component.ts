import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/heroes.data';
import { CanFlyPipe } from '../../pipes/can-fly.pipe';

@Component({
    selector: 'app-custom-page',
    imports: [ToggleCasePipe, CanFlyPipe],
    templateUrl: './custom.component.html'
})
export default class CustomComponent {
    name = signal('Francisco Alejandro');
    toggle = signal(true);

    heroes = signal(heroes);
}
