import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, addDoc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Cadastro {
  nome: string;
  email: string;
  senha: string;
  confirmacaodesenha: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: Firestore) { }

  getNotes(): Observable<Cadastro[]> {
    const takoutRef = collection(this.firestore, 'takout');
    return collectionData(takoutRef, { idField: 'nome' }) as Observable<Cadastro[]>;
  }

  getNoteById(nome): Observable<Cadastro[]> {
    const takoutDocRef = doc(this.firestore, `takout/${nome}`);
    return docData(takoutDocRef, { idField: 'nome' }) as Observable<Cadastro[]>;
  }

  addNote(takout: Cadastro) {
    const takoutRef = collection(this.firestore, 'takout');
    return addDoc(takoutRef, takout);
  }

  deleteNote(takout: Cadastro) {
    const takoutDocRef = doc(this.firestore, `takout/${takout.nome}`);
    return deleteDoc(takoutDocRef);
  }

  updateDoc(takout: Cadastro) {
    const takoutDocRef = doc(this.firestore, `takout/${takout.nome}`);
    return updateDoc(takoutDocRef, { email: takout, senha: takout, cofirmacaodesenha: takout });
  }

}
