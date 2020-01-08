export  class  ContactInfo {
  id: number;
  nom: string;
  prenom: string;
  ville: string;
  email: string;
  telephone: string;
  propositions: string;
  commentaire: string;
  remarque: string;
  reset() {
    this.nom = "";
    this.prenom = "";
    this.ville = "";
    this.email = "";
    this.telephone = "";
    this.propositions = "";
    this.commentaire = "";
    this.remarque = "";
  }
}