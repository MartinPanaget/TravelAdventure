import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog';
import { BlogOverviewService } from './../blog-overview.service';

@Component({
  selector: 'app-blog-overview',
  templateUrl: './blog-overview.component.html',
  styleUrls: ['./blog-overview.component.css']
})
export class BlogOverviewComponent implements OnInit {
  blogEntries: Blog[] = [];

  constructor(private blogOverviewService: BlogOverviewService) { }

  ngOnInit(): void {
    this.getAll();
  }
  async getAll() {
    this.blogEntries = await this.blogOverviewService.getAll();
  }

  async add(title: string, subtitle: string,  author: string, content: string) {
    await this.blogOverviewService.add(title, subtitle, author, content);
    this.getAll();
  }
}
