import {NgModule,} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Page} from './components/page';
import {FormInput} from './components/form/formInput';
@NgModule({
 imports:[CommonModule,FormsModule],
 exports:[Page,FormInput,FormsModule],
 declarations:[Page,FormInput]
})
export class AppCommonModule{

}