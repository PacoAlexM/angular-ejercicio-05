import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
    selector: 'app-numbers-page',
    imports: [DecimalPipe, PercentPipe, CurrencyPipe],
    templateUrl: './numbers.component.html'
})
export default class NumbersComponent {
    totalSales = signal(2_345_323.8746);
    percent = signal(0.4856);
}
