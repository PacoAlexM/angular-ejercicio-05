import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, signal } from '@angular/core';

@Component({
    selector: 'app-basic-page',
    imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
    templateUrl: './basic.component.html'
})
export default class BasicComponent {
    nameLower = signal('francisco');
    nameUpper = signal('FRANCISCO');
    fullName = signal('FrANcIsCO ALEjanDro');

    myDate = signal(new Date());

    myTimerEffect = effect(onClear => {
        const interval = setInterval(() => {
            this.myDate.set(new Date());
            console.log('tick');
        }, 1000);

        onClear(() => {
            clearInterval(interval);
        });
    });
}
