import { Component, signal } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { interval, map, tap } from 'rxjs';

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
    imports: [CardComponent, I18nSelectPipe, I18nPluralPipe, SlicePipe, JsonPipe, UpperCasePipe, KeyValuePipe, TitleCasePipe, AsyncPipe],
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

    // i18n Plural
    clientsMap = signal({
        '=0': 'no hay clientes esperando',
        '=1': 'hay un cliente esperando',
        '=2': 'hay 2 clientes esperando',
        other: 'hay # clientes esperando',
    });

    clientes = signal([
        'Alejandro',
        'Jorge',
        'Roberto',
        'Fernanda',
        'Luis',
        'Adriana',
        'Nancy',
        'Alondra',
        'Raquel',
        'Carlos',
        'Julieta',
        'Esteban',
    ]);

    deleteCliente() {
        this.clientes.update(p => p.slice(1));
    }

    // KeyValue Pipe
    profile = {
        name: 'Alejandro',
        age: 21,
        address: 'Calle Roman #21',
    }

    // Async Pipe
    promiseValue: Promise<string> = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Tenemos informacion en la promesa');
        }, 3500);
    });

    observableTimer = interval(2000).pipe(
        map(value => value + 1),
        tap(value => console.log({'value': value}))
    );
}
