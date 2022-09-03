import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor() { }

  blog = 'blog-post'
  data = [
    {blog_item: 1, blog_title: "Post 1. Caminata por la playa", blog_img: '../../../assets/img/imagen1.jpg'},
    {blog_item: 1, blog_title: "Post 2. Que linda libreta tengo", blog_img: '../../../assets/img/imagen2.jpg'},
    {blog_item: 1, blog_title: "Post 3. Volando por navidades", blog_img: '../../../assets/img/imagen3.jpg'},
    {blog_item: 1, blog_title: "Post 4. Que buenas vistas tengo", blog_img: '../../../assets/img/imagen4.jpg'},
    {blog_item: 1, blog_title: "Post 5. La naturaleza nos llama", blog_img: '../../../assets/img/imagen5.jpg'},
    {blog_item: 1, blog_title: "Post 6. Panorama de todas mis dias", blog_img: '../../../assets/img/imagen6.jpg'},
    {blog_item: 1, blog_title: "Post 7. Los animales lo son todo", blog_img: '../../../assets/img/imagen7.jpg'},
    {blog_item: 1, blog_title: "Post 8. De visita en la granja", blog_img: '../../../assets/img/imagen9.jpg'},
  ]

  ngOnInit(): void {
  }

}
