import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import { ShareService } from '../share.service';


@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css'],

})
export class ShareComponent implements OnInit {

  @ViewChild('shareContainer') shareContainer!: ElementRef;

  constructor(private shareService: ShareService) { }

  ngOnInit(): void {
  }

  share() {
    html2canvas(this.shareContainer.nativeElement).then((canvas) => {
      const image = canvas.toDataURL('image/png');
      const shareButtons = [
        {
          button: 'Whatsapp',
          url: 'https://web.whatsapp.com/' + encodeURIComponent(image),
        },
        {
          button: 'facebook',
          url: 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(image),
        },
        {
          button: 'twitter',
          url: 'https://twitter.com/intent/tweet?url=' + encodeURIComponent(image),
        },
        // Add more share buttons as needed
      ];
      shareButtons.forEach((share) => {
        this.shareService.share(share.button, share.url);
      });
    })



  }



}
