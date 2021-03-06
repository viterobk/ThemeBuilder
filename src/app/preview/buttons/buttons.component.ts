import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-buttons',
    templateUrl: './buttons.component.html',
    styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
    widgetGroup = 'buttons';
    isExpanded = new BehaviorSubject<boolean>(false);

    baseOptions: Array<any> = [
        { text: 'Normal Type', type: 'normal' },
        { text: 'Success Type', type: 'success' },
        { text: 'Default Type', type: 'default' },
        { text: 'Danger Type', type: 'danger' }
    ];

    modes: Array<string> = [ 'contained', 'outlined', 'text' ];
}
