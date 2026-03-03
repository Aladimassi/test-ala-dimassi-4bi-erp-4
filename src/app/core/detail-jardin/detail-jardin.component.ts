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
  id!: string;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private jardinService: JardinService){}

  ngOnInit(){
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log('This is the id: ', this.id);
    this.jardinService.getJardinById(this.id).subscribe((data)=>{
      this.jardin = data;
      console.log(data);
    });
  }

  returnToList(){
    this.router.navigateByUrl('/jardin/list');
  }
}
