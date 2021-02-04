import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog';
import { BlogOverviewService } from './../blog-overview.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  blogEntries: Blog[] = [];
  index: number;

  constructor(private blogOverviewService: BlogOverviewService) { }

  ngOnInit(): void {
    this.getAll();
    this.getIndex();
  }

  getIndex() {
    const urlParams = new URLSearchParams(window.location.search);
    this.index = parseInt(urlParams.get('index'));
  }

  async getAll() {
    this.blogEntries = await this.blogOverviewService.getAll();
  }

}
