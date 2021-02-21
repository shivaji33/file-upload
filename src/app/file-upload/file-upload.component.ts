import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-file-upload",
  templateUrl: "./file-upload.component.html",
  styleUrls: ["./file-upload.component.scss"]
})
export class FileUploadComponent implements OnInit {
  message: string;
  imgURL: string | ArrayBuffer;
  imagePath: any;

  constructor() {}

  ngOnInit() {}

  preview(files) {
    console.log(files);
    if (files.length === 0) return;
    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    const reader = new FileReader();
    this.imagePath = files[0];
    console.log(this.imagePath);
    reader.readAsDataURL(files[0]);
    reader.onload = _event => {
      this.imgURL = reader.result;
    };
  }
  bytesToSize(bytes) {
   var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
   if (bytes == 0) return '0 Byte';
   const i = Math.floor(Math.log(bytes) / Math.log(1024));
   return (Math.round(bytes / Math.pow(1024, i) * 100) / 100) + ' ' + sizes[i];
}
droppedFile(files) {
  
}
}
