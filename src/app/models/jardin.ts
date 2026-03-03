export interface Jardin {
    id?: number; // Auto-increment depuis MySQL
    adresse: string; // minimum 5 caracteres
    surface: number; // doit etre positive et minimum 50
    dateEntretien: Date | string;
    statut: boolean;
}
