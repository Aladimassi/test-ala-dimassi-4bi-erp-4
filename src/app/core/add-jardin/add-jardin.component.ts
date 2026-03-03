import { Component } from '@angular/core';
import { Jardin } from '../../models/jardin';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JardinService } from '../../services/jardin.service';
import { LogService } from '../../services/log.service';

@Component({
  selector: 'app-add-jardin',
  templateUrl: './add-jardin.component.html',
  styleUrl: './add-jardin.component.css'
})
export class AddJardinComponent {
  jardin: Jardin = {
    adresse: '',
    surface: 50,
    dateEntretien: new Date().toISOString().split('T')[0],
    statut: true
  }
  
  jardinForm!: FormGroup;

  constructor(private router: Router, private jardinService: JardinService, private logService: LogService) { }

  ngOnInit(): void {
    this.jardinForm = new FormGroup({
      adresse: new FormControl(this.jardin.adresse, [Validators.required, Validators.minLength(5)]),
      surface: new FormControl(this.jardin.surface, [Validators.required, Validators.min(50)]),
      dateEntretien: new FormControl(this.jardin.dateEntretien, [Validators.required]),
      statut: new FormControl(this.jardin.statut, [Validators.required])
    });
  }

  get adresse() {
    return this.jardinForm.get('adresse');
  }
  get surface() {
    return this.jardinForm.get('surface');
  }
  get dateEntretien() {
    return this.jardinForm.get('dateEntretien');
  }
  get statut() {
    return this.jardinForm.get('statut');
  }

  submitJardinForm() {
    this.logService.log(this.jardinForm.value);
    this.jardinService.addJardin(this.jardinForm.value).subscribe({
      next: (data) => {
        this.logService.log("Jardin ajouté avec succès: " + JSON.stringify(data));
        this.router.navigateByUrl('/jardin/list');
      },
      error: (err) => {
        this.logService.error("Erreur lors de l'ajout du jardin: " + err);
      }
    });
  }
}
