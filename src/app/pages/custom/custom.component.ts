import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/heroes.data';
import { CanFlyPipe } from '../../pipes/can-fly.pipe';
import { HeroColorPipe } from '../../pipes/hero-color.pipe';
import { HeroCreatorPipe } from '../../pipes/hero-creator.pipe';
import { HeroTextColorPipe } from '../../pipes/hero-text-color.pipe';
import { TitleCasePipe } from '@angular/common';
import { HeroSortByPipe } from '../../pipes/hero-sort-by.pipe';
import { Hero } from '../../interfaces/hero.interface';
import { HeroFilterPipe } from '../../pipes/hero-filter.pipe';

@Component({
    selector: 'app-custom-page',
    imports: [ToggleCasePipe, CanFlyPipe, HeroColorPipe, HeroTextColorPipe, HeroCreatorPipe, TitleCasePipe, HeroSortByPipe, HeroFilterPipe],
    templateUrl: './custom.component.html'
})
export default class CustomComponent {
    name = signal('Francisco Alejandro');
    toggle = signal(true);
    heroes = signal(heroes);
    sortBy = signal<keyof Hero | null>(null);
    searchQuery = signal('');
    
}
