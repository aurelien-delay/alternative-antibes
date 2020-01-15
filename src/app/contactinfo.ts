export  class  ContactInfo {
  id: number;
  nom: string;
  prenom: string;
  ville: string;
  email: string;
  telephone: string;
  propositions: string;
  commentaire: string;
  militer: boolean;
  candidat: boolean;
  comité: boolean;
  remarque: string;
  reset() {
    this.nom = "";
    this.prenom = "";
    this.ville = "";
    this.email = "";
    this.telephone = "";
    this.propositions = "";
    this.commentaire = "";
    this.militer = false;
    this.candidat = false;
    this.comité = false;
    this.remarque = "";
  }
}