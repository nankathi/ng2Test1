import {Component,Input,Output,EventEmitter} from '@angular/core';
@Component({
selector:'form-input',
templateUrl:'src/modules/common/components/form/formInput.html'
})
export class FormInput{
    @Input() label:any;
    @Input() value:any;
    @Output() valueChange:EventEmitter<any> = new EventEmitter<any>();

    onValueChanged(){
        this.valueChange.emit(this.value);
    }
}