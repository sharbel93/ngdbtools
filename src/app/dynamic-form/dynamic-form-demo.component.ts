import {Component, Inject, Injector, OnInit, ViewChild} from '@angular/core';
import {DynamicFormComponent, DropdownFormControl, TextBoxFormControl} from '@ngdbtools/dynamic-form';
import {ModalRef} from '@ngdbtools/common';
import {RValidators} from '../../../projects/core/src/lib/helpers';


@Component({
    selector: 'app-dynamic-form-demo',
    templateUrl: './dynamic-form-demo.component.html',
})
export class DynamicFormDemoComponent implements OnInit {
    @ViewChild(DynamicFormComponent) dynamicForm: DynamicFormComponent;

    constructor() {}

    ngOnInit() {
        const sampleData = {creditCardTypeId: 1};
        this.dynamicForm.update(sampleData, this.getFormControls(), [RValidators.matchControl('catName', 'verify')]);
    }

    public getFormControls() {
        return [
            new TextBoxFormControl({
                key: 'catName',
                label: 'Cat Name',
                placeholder: 'Please put in your cat\'s name',
                column: 12
            }),
            new TextBoxFormControl({
                key: 'verify',
                label: 'Verify Cat Name',
                placeholder: 'Please put in your cat\'s name',
                column: 12
            }),
            new DropdownFormControl({
                key: 'creditCardTypeId',
                label: 'Credit Card Type',
                placeholder: 'Please select a credit card Type',
                required: true,
                disabledIfExist: true,
                column: 12,
                options: [
                    {key: 1, value: 'MasterCard'},
                    {key: 2, value: 'VisaCard'}
                ]
            }),

            new DropdownFormControl({
                key: 'catColor',
                label: 'Cat Color',
                placeholder: 'Please select a color for your cat',
                required: true,
                disabledIfExist: true,
                column: 12,
                options: [
                    {key: 0, value: 'Red'},
                    {key: 1, value: 'Blue'}
                ],
                helpText: 'Note that the color of the cat cannot change'
            }),
        ];
    }

    onValueChanges(data) {
        console.log(data);
    }

    onSubmit(payload = this.dynamicForm.getPayload()) {
        console.log(payload);
    }

    close() {
        // this.modalRef.close(null);
    }
}
