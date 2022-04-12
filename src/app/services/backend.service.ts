import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  status: string;
  constructor(public firestore: AngularFirestore) { 
    
  }

  setData(buttonstatus: boolean) {
    this.firestore.collection('data').doc('data').set({status: buttonstatus});
  }
}
