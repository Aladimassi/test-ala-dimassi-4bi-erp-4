import { Component } from '@angular/core';
import { Jardin } from '../../models/jardin';
import { ActivatedRoute, Router } from '@angular/router';
import { JardinService } from '../../services/jardin.service';

@Component({
  selector: 'app-detail-jardin',
  templateUrl: './detail-jardin.component.html',
  styleUrl: './detail-jardin.component.css'
})
export class DetailJardinComponent {
  jardin!: Jardin | any;
  id!: number;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private jardinService: JardinService){}

  ngOnInit(){
    this.id = +this.activatedRoute.snapshot.params['id'];
    console.log('ID du jardin:', this.id);
    this.jardinService.getJardinById(this.id).subscribe({
      next: (data) => {
        console.log('Données reçues:', data);
        // Compatible avec JSON Server (retourne l'objet directement) et Node.js backend (retourne {jardin: ...})
        this.jardin = data.jardin || data;
        console.log('Jardin chargé:', this.jardin);
      },
      error: (err) => {
        console.error('Erreur lors de la récupération du jardin:', err);
      }
    });
  }

  returnToList(){
    this.router.navigateByUrl('/jardin/list');
  }
}
