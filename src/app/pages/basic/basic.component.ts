import { LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
    selector: 'app-basic-page',
    imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe],
    templateUrl: './basic.component.html'
})
export default class BasicComponent {
    nameLower = signal('francisco');
    nameUpper = signal('FRANCISCO');
    fullName = signal('FrANcIsCO ALEjanDro');
}
