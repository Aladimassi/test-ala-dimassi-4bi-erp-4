import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JardinService } from '../../services/jardin.service';
import { LogService } from '../../services/log.service';
import { Jardin } from '../../models/jardin';

@Component({
  selector: 'app-update-jardin',
  templateUrl: './update-jardin.component.html',
  styleUrl: './update-jardin.component.css'
})
export class UpdateJardinComponent {
  jardin!: Jardin;
  jardinForm!: FormGroup;
  id!: number;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private jardinService: JardinService, private logService: LogService) { }

  ngOnInit(): void {
    this.id = +this.activatedRoute.snapshot.params['id'];
    this.jardinService.getJardinById(this.id).subscribe((data)=>{
      this.jardin = data.jardin || data;
      this.jardinForm = new FormGroup({
        adresse: new FormControl(this.jardin.adresse, [Validators.required, Validators.minLength(5)]),
        surface: new FormControl(this.jardin.surface, [Validators.required, Validators.min(50)]),
        dateEntretien: new FormControl(this.jardin.dateEntretien.toString().split('T')[0], [Validators.required]),
        statut: new FormControl(this.jardin.statut, [Validators.required])
      });
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
    this.jardinService.updateJardin(this.id, this.jardinForm.value).subscribe({
      next: () => {
        this.router.navigateByUrl('/jardin/list');
      },
      error: (err) => {
        this.logService.error("Erreur lors de la mise à jour du jardin: " + err);
      }
    });
  }
}
