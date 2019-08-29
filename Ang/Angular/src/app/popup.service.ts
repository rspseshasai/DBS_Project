import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PopupComponent } from './popup/popup.component';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor(private modalService: NgbModal) { } 

  public confirm(
    title: string,
    message: string,
    btnOkText: string = 'Stay',
    btnCancelText: string = 'Logout',
    dialogSize: 'sm'|'lg' = 'sm'): Promise<boolean> {
    const modalRef = this.modalService.open(PopupComponent, { size: dialogSize });
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.btnOkText = btnOkText;
    modalRef.componentInstance.btnCancelText = btnCancelText;

    return modalRef.result;
  }
}
