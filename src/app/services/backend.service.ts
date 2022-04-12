import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { BluetoothLE } from '@awesome-cordova-plugins/bluetooth-le/ngx';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  status: string;
  constructor(public firestore: AngularFirestore, public db: AngularFireDatabase, private bluetooth: BluetoothLE) { 
    
  }

  setData(buttonstatus: boolean) {
    //this.firestore.collection('data').doc('data').update({status: buttonstatus});
    const itemRef = this.db.object('data');
    itemRef.update({ status: buttonstatus });
    


  }

  setSpeed(speed: number) {
    //this.firestore.collection('data').doc('data').update({speed: speed});
    const itemRef = this.db.object('data');
    itemRef.update({ speed: speed });
  }
}
