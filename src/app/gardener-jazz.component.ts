import { Component } from '@angular/core';
import { BandComponent, band } from './band/index';
import { localBands } from './band/fixtures';

@Component({
  moduleId: module.id,
  selector: 'gardener-jazz-app',
  directives: [BandComponent],
  templateUrl: 'gardener-jazz.component.html',
  styleUrls: ['gardener-jazz.component.css']
})
export class GardenerJazzAppComponent {
  title = 'Local bands:';

  public bands:band[] = localBands;
}
