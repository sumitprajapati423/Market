import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-drag',
  templateUrl: './drag.component.html',
  styleUrls: ['./drag.component.css']

})
export class DragComponent {

  // Axis(event:any){
  //   console.log(event);
  // }

  // x:number = 200
  // y:number = 200





  captionText: string = '';

  // ------------------------------------------------

  screenshotAndShare() {
    const captureElement = document.getElementById('capture');
    const additionalText = this.captionText ? `${this.captionText}\n\nCheck out this information from ALPHA EDUCATION CENTER!` : 'Check out this information from ALPHA EDUCATION CENTER!';

    if (captureElement) {
      html2canvas(captureElement).then(canvas => {
        canvas.toBlob(blob => {
          if (blob) {
            const file = new File([blob], 'screenshot.png', { type: 'image/png' });

            if (navigator.share) {
              navigator.share({
                files: [file],
                title: 'Screenshot',
                text: additionalText
              }).catch(error => console.error('Error sharing', error));
            } else {
              console.error('Share not supported');
            }
          } else {
            console.error('Blob is null');
          }
        });
      });
    }
  }


}
