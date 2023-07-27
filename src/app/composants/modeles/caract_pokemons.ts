
export class caract_pokemons {

  private _id:string;
  private _nom:string;
  private _type:string[];
  private _taille: string;
  private _poids: string;


  constructor(id: string, nom: string, type: string[], taille: string, poids: string) {
    this._id = id;
    this._nom = nom;
    this._type = type;
    this._taille = taille;
    this._poids = poids;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get type(): string[] {
    return this._type;
  }

  set type(value: string[]) {
    this._type = value;
  }

  get taille(): string {
    return this._taille;
  }

  set taille(value: string) {
    this._taille = value;
  }

  get poids(): string {
    return this._poids;
  }

  set poids(value: string) {
    this._poids = value;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

}
