import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PopupssComponent } from './popuss/popupss.component';
@Injectable({
 providedIn: 'root'
})
export class PopupssService {
 constructor(private modalService: NgbModal) { }
 public confirm(
   title: string,
   message: string,
   btnOkText: string = 'Ok',
   dialogSize: 'sm'|'lg' = 'sm'): Promise<boolean> {

   const modalRef = this.modalService.open(PopupssComponent, { size: dialogSize });
   modalRef.componentInstance.title = title;
   modalRef.componentInstance.message = message;
   modalRef.componentInstance.btnOkText = btnOkText;
   return modalRef.result;

 }
}