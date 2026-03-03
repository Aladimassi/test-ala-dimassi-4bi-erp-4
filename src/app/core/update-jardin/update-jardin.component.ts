import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Jardin } from '../../models/jardin';
import { JardinService } from '../../services/jardin.service';
import { LogService } from '../../services/log.service';

@Component({
  selector: 'app-update-jardin',
  templateUrl: './update-jardin.component.html',
  styleUrl: './update-jardin.component.css'
})
export class UpdateJardinComponent implements OnInit {
  jardinForm!: FormGroup;
  jardin!: Jardin;
  id!: number;

  constructor(
    private jardinService: JardinService,
    private logService: LogService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log('UpdateJardinComponent initialized');
    
    this.id = Number(this.activatedRoute.snapshot.params['id']);
    console.log('Jardin ID from route:', this.id);

    if (!this.id || isNaN(this.id)) {
      console.error('Invalid ID:', this.id);
      this.router.navigate(['/jardin/list']);
      return;
    }

    this.jardinService.getJardinById(this.id).subscribe({
      next: (data) => {
        console.log('Jardin data received:', data);
        
        // Support both { jardin: {...} } and direct {...} formats
        this.jardin = data.jardin || data;
        console.log('Jardin object:', this.jardin);
        
        // Ensure jardin properties exist
        if (!this.jardin) {
          console.error('Jardin is null or undefined');
          this.router.navigate(['/jardin/list']);
          return;
        }

        // Convert dateEntretien to string format for input[type="date"]
        let dateString = '';
        if (this.jardin.dateEntretien) {
          const dateValue = this.jardin.dateEntretien.toString();
          dateString = dateValue.split('T')[0];
          console.log('Date converted:', dateString);
        } else {
          dateString = new Date().toISOString().split('T')[0];
          console.log('Using default date:', dateString);
        }

        // Create the form
        this.jardinForm = new FormGroup({
          adresse: new FormControl(this.jardin.adresse || '', [Validators.required, Validators.minLength(5)]),
          surface: new FormControl(this.jardin.surface || 50, [Validators.required, Validators.min(50)]),
          dateEntretien: new FormControl(dateString, [Validators.required]),
          statut: new FormControl(this.jardin.statut !== undefined ? this.jardin.statut : true)
        });

        console.log('Form created:', this.jardinForm.value);
      },
      error: (err) => {
        console.error('Error loading jardin:', err);
        alert('Erreur lors du chargement du jardin');
        this.router.navigate(['/jardin/list']);
      }
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

  submitJardinForm(): void {
    if (this.jardinForm.invalid) {
      console.log('Form is invalid');
      return;
    }

    console.log('Submitting form:', this.jardinForm.value);

    const updatedJardin: Jardin = {
      id: this.id,
      adresse: this.jardinForm.value.adresse,
      surface: Number(this.jardinForm.value.surface),
      dateEntretien: this.jardinForm.value.dateEntretien,
      statut: this.jardinForm.value.statut === 'true' || this.jardinForm.value.statut === true
    };

    console.log('Updated jardin object:', updatedJardin);

    this.jardinService.updateJardin(this.id, updatedJardin).subscribe({
      next: () => {
        console.log('Jardin updated successfully');
        this.logService.log(`Jardin ${this.id} modifié avec succès`);
        this.router.navigate(['/jardin/list']);
      },
      error: (err) => {
        console.error('Error updating jardin:', err);
        alert('Erreur lors de la mise à jour du jardin');
      }
    });
  }
}
