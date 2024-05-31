import { Component, OnInit } from '@angular/core';
// import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-ckeditor',
  templateUrl: './ckeditor.component.html',
  styleUrls: ['./ckeditor.component.css']
})
export class CkeditorComponent implements OnInit {

//   public Editor = ClassicEditor;



// toolbarConfig = {
//   items: [
//     'undo', 'redo',
//         '|', 'heading',
//         '|', 'fontfamily', 'fontsize', 'fontColor', 'fontBackgroundColor',
//         '|', 'bold', 'italic', 'strikethrough', 'subscript', 'superscript', 'code',
//         '-', // break point
//         '|', 'alignment',
//         'link', 'uploadImage', 'blockQuote', 'codeBlock',
//         '|', 'bulletedList', 'numberedList', 'todoList', 'outdent', 'indent'
//   ],
//   shouldNotGroupWhenFull: true
// } as any;

  constructor() { }

  ngOnInit(): void {
  }



}
