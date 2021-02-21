import { Component, OnInit } from "@angular/core";
interface Image {
  name: string;
  size: string,
  url: string | ArrayBuffer
}
@Component({
  selector: "app-file-upload",
  templateUrl: "./file-upload.component.html",
  styleUrls: ["./file-upload.component.scss"]
})
export class FileUploadComponent implements OnInit {
  message: string;
  imagePath: any;
  imgURL: string | ArrayBuffer;
  imageDetails: Image;

  constructor() {}

  ngOnInit() {}
  preview(files) {
    if (files.length === 0) return;
    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = _event => {
      this.imageDetails.url = reader.result;
    };
  }
}
