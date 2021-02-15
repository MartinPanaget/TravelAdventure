import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog';
import { BlogOverviewService } from '../blog-overview.service';
import {ArticleCreateService} from '../article-create.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})


export class BlogCreateComponent implements OnInit {
  selectedValue = '';
  blogEntries: Blog[] = [];
  titletext = new FormControl('', [Validators.required]);


  constructor(private blogOverviewService: BlogOverviewService, private articleCreateService: ArticleCreateService) {}

  ngOnInit(): void {
    this.getAll();
  }

  async getAll() {
    this.blogEntries = await this.blogOverviewService.getAll();
  }

  async add(title: string, subtitle: string, author: string, content: string, category:any) {
    await this.blogOverviewService.add(title, subtitle, author, content, category);
    this.getAll();
  }

  getErrorMessage() {
    return this.titletext.hasError('required') ? 'Du musst einen Titel eingeben' :
            '';
  }

}
