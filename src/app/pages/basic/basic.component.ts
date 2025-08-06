import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { AvailableLocale, LocaleService } from '../../services/locale.service';

@Component({
    selector: 'app-basic-page',
    imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
    templateUrl: './basic.component.html'
})
export default class BasicComponent {
    localeService = inject(LocaleService);
    currentLocal = signal(inject(LOCALE_ID));

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

    changeLocale(locale: AvailableLocale) {
        this.localeService.changeLocale(locale);
    }
}
