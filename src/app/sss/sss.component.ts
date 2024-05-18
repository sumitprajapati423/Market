import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-sss',
  templateUrl: './sss.component.html',
  styleUrls: ['./sss.component.css']
})
export class SssComponent implements OnInit {

  ngOnInit(): void {
  }

  title = 'canva';
  imageIsLoaded: boolean = false;
  @ViewChild('contentToCapture', { static: true }) contentToCapture!: ElementRef;
  imageUrl: string = "http://103.255.39.101/Images/Sole-swap/1.png"

  constructor(private http:HttpClient) {}

  shareOnWhatsApp() {
    this.http.get('http://103.255.39.101:3026/proxy', { params: { url: this.imageUrl }, responseType: 'text' }).subscribe(response => {
      this.imageUrl = `data:image/jpeg;base64,${response}`;
      setTimeout(() => {
        const elementToCapture: HTMLElement = this.contentToCapture.nativeElement;
        html2canvas(elementToCapture).then(canvas => {
          canvas.toBlob((blob:any) => {
            const downloadLink = document.createElement('a');
            downloadLink.href = URL.createObjectURL(blob);
            downloadLink.download = 'shared_image.png';
            downloadLink.click();
            URL.revokeObjectURL(downloadLink.href);
          }, 'image/png');

        })
      }, 200);


    });
    // const elementToCapture: HTMLElement = this.contentToCapture.nativeElement;
    // html2canvas(elementToCapture,{useCORS:false}).then(canvas => {
    //   canvas.toBlob((blob:any) => {
    //     const downloadLink = document.createElement('a');
    //     downloadLink.href = URL.createObjectURL(blob);
    //     downloadLink.download = 'shared_image.png';
    //     downloadLink.click();
    //     URL.revokeObjectURL(downloadLink.href);
    //   }, 'image/png');

    // })

  }}
