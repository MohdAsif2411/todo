import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '@app/services';
import { merge, of } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit, AfterViewInit {

  displayedColumns = ['title', 'description', 'targetDate', 'status'];
  dataSource = new MatTableDataSource();

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service: TodoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

  }

  ngAfterViewInit(): void {

    // If the user changes the sort order, reset back to the first page.
    this.sort?.sortChange?.subscribe(() => this.paginator.pageIndex = 0);

    merge( this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.service.getPage(this.paginator.pageIndex + 1, this.paginator.pageSize, 'targetDate', this.sort.direction);
          // this.sort.active, this.sort.direction, this.paginator.pageIndex);
        }),
        map((data: any) => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.resultsLength = Number(data.total_count);

          return data.items;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          // Catch if the GitHub API has reached its rate limit. Return empty data.
          this.isRateLimitReached = true;
          return of([]);
        })
      ).subscribe(data => this.dataSource.data = data);
  }


  goToEntity(id: any) {
    this.router.navigate([id], { relativeTo: this.route });
  }




}

