import { Component, signal } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { I18nSelectPipe } from '@angular/common';

const cliente1 = {
    name: 'Francisco',
    gender: 'male',
    age: 33,
    address: 'Guadalajara, Mexico'
}

const cliente2 = {
    name: 'Alejandra',
    gender: 'female',
    age: 23,
    address: 'San Luis Potosi, Mexico'
}

@Component({
    selector: 'app-uncommon-page',
    imports: [CardComponent, I18nSelectPipe],
    templateUrl: './uncommon.component.html'
})
export default class UncommonComponent {
    // i18n Select
    cliente = signal(cliente1);

    invitationMap = {
        male: 'invitarlo',
        female: 'invitarla',
    }

    changeCliente() {
        if (this.cliente() === cliente1) {
            this.cliente.set(cliente2);
            return;
        }

        this.cliente.set(cliente1);
    }
}
