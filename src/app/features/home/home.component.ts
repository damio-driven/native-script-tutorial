import { Component } from '@angular/core'
import { FlickService } from '../../core/services/flick.service'

@Component({
  moduleId: module.id,
  selector: 'ns-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  flicks = this.flickService.getFlicks();

  constructor(private flickService: FlickService) {

  }

}
