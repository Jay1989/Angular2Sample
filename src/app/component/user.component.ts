import { Component } from '@angular/core'

@Component({
    moduleId: module.id,
    selector: 'user-details',
    templateUrl: 'user.component.html'
})
export class UserComponent {
    name: string = 'Jay';
    email: string = 'jay.iitd@gmail.com';
    address = {
        house: 'Flat 202 Sindura Enclave apt',
        area: 'Green House Layout',
        city: 'Bangalore',
        state: 'Karnataka'
    }
    arr1 = new Array(1, 3, 5, 6, 7, 8);

}