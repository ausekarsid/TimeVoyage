import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataSet } from 'vis-data';
import { Timeline, TimelineOptions } from 'vis-timeline';
import { dataset, options } from './constants';
import { PopupModalComponent } from './popup-modal/popup-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Time Voyage';
  timeline!: Timeline;

  @ViewChild('timeline', { static: true })
  timelineContainer!: ElementRef;
  timelineData!: DataSet<any>;

  timelineOptions: TimelineOptions = options;

  originalDataset = dataset;
  chartData = this.originalDataset.map((obj) => {
    return {
      id: obj.id,
      content: `<img src="${obj.image}" alt="" height="40px" /> ${obj.title}`,
      start: obj.start,
    };
  });

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    // Create a DataSet (allows two way data-binding)
    this.timelineData = new DataSet(this.chartData);

    // Create a Timeline
    this.timeline = new Timeline(
      this.timelineContainer.nativeElement,
      this.timelineData,
      this.timelineOptions
    );

    this.timeline.setItems(this.timelineData);

    this.timeline.fit();

    this.timeline.on('click', (properties) => {
      if (properties.item) {
        this.openModal(properties.item);
      }
    });
  }

  refocus() {
    this.timeline.fit();
  }

  // Method to filter timeline items based on a search query
  filterItems(event: any): void {
    const searchQuery = event.target.value;
    // Logic to filter timeline items based on searchQuery
    const filteredItems = this.originalDataset
      .filter((item) =>
        item?.title
          ?.toString()
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      )
      .map((obj) => {
        return {
          id: obj.id,
          content: `<img src="${obj.image}" alt="img not found" height="50" /> ${obj.title}`,
          start: obj.start,
          title: obj.description,
        };
      });

    // Clear timeline and add filtered items
    this.timelineData.clear();
    this.timelineData.add(filteredItems);
    this.timeline.fit();
    // Re-render timeline
    this.timeline.redraw();
  }

  openModal(id: number): void {
    const obj = this.originalDataset.find(d => d.id === id);
    const dialogRef = this.dialog.open(PopupModalComponent, {
      // width: '400px',
      // height: '300px',
      disableClose: true,
      panelClass: 'custom-dialog-container',
      data: {
        title: obj?.title,
        video: obj?.video,
        description: obj?.description,
        date: obj?.start
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The modal was closed');
    });
  }
}
