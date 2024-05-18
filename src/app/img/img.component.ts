import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css'],
})
export class ImgComponent implements OnInit {
  selectedshop:any;
  baseUrl:any;
  router:any

  openlink(linkno:any) {
    let linkshare;
    let baseUrl='';
    let permalink='';
    let encodeurl = encodeURI(`${baseUrl}/${permalink}`);

    let texttoshare = `Please check out this store 🙌 ${encodeurl}.%0A%0AAvailable on the product :%0Ahttps://shop.shupple.com/product/466819/100-Instant-Coffee-Creamy-Caramel-30gm-`;

    if (linkno == 0) {
      linkshare = `https://api.whatsapp.com/send?text=${texttoshare}`;
    } else if (linkno == 1) {
      linkshare = `https://www.facebook.com/sharer.php?u=${encodeurl}&quote=${texttoshare}`;
    } else if (linkno == 2) {
      linkshare = `https://pinterest.com/pin/create/button/?url=${encodeurl}&media=&description=${texttoshare}`;
    } else if (linkno == 3) {
      linkshare = `https://twitter.com/intent/tweet?url=${encodeurl} via @Shupple_com&text=${texttoshare} via @Shupple_com`;
    } else if (linkno == 4) {
      linkshare = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeurl}&title=${texttoshare}`;
    }
    // if (isPlatformBrowser(this.platformId)) {
      window.open(linkshare, "MsgWindow", "width=500,height=600");
    // }
  }

 openSharePopup() {
     document.getElementById("shareiconmodal")!.style.display = "block";
  }
  closepop() {
    document.getElementById("shareiconmodal")!.style.display = "none";
  }

  copyMessage(){

  }



  constructor() { }

  ngOnInit(): void {
  }

}
