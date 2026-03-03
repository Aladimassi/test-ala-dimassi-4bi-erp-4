export interface Jardin {
    id: string;
    adresse: string; // minimum 5 caracteres
    surface: number; // doit etre positive et minimum 50
    dateentre: Date | string;
    statut: boolean;
}
