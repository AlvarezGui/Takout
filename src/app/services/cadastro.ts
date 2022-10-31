import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Cadastro } from '../models/Cadastro';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private afs: AngularFirestore) { }

  salvar(cadastro: Cadastro) {
    return this.afs.collection('cadastros').add({ ...cadastro });
  }

  buscarCadastro() {
    return this.afs.collection('cadastros').snapshotChanges();
  }

  buscarPorId(id: string) {
    return this.afs.collection('cadastros').doc(id).valueChanges();
  }

  alterar(cadastro: Cadastro) {
    return this.afs.collection('cadastros').doc(cadastro.id).update({ ...cadastro });
  }

  deletar(id: string) {
    return this.afs.doc('cadastros/' + id).delete();
  }

}
