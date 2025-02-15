import { Component } from '@angular/core';
import { ColDef, ClientSideRowModelModule } from 'ag-grid-community';
import { AgGridModule } from 'ag-grid-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AgGridModule], 
  template: `
    <h1>AG Grid Example</h1>
    <button (click)="saveOrUpdateData()">Save & Update</button>
    <button (click)="toggleColumns()">Toggle Columns</button>
    <ag-grid-angular
      class="ag-theme-quartz"
      [rowData]="rowData"
      [columnDefs]="colDefs"
      [defaultColDef]="defaultColDef"
      [modules]="modules" 

      style="height: 500px; width: 100%;"
      rowSelection="multiple" 
      />
    
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  modules = [ClientSideRowModelModule];

  defaultColDef:ColDef={
    floatingFilter:true,
    flex: 1,
    filter: true,
    sortable: true,
    resizable: true , 
    editable: true
  }
 
  rowData = [
    { id: 997, ruleName: '2DS - Trace Changes', active: 'Y', type: 'Match', subType: '2DS - Trace Changes', domain: '', impacted: 0, favourite: 'N', scheduled: 'Y', lastScheduledDate: '01-May-2024 01:15 PM', alert: 'Y' },
    { id: 996, ruleName: 'Trace Changes', active: 'Y', type: 'Match', subType: '2DS - Trace Changes', domain: '', impacted: 0, favourite: 'N', scheduled: 'N', lastScheduledDate: '01-May-2024 01:15 PM', alert: 'N' },
    { id: 986, ruleName: 'File Monitor', active: 'Y', type: 'Match', subType: '1DS - File Monitor', domain: '', impacted: 57994, favourite: 'N', scheduled: 'Y', lastScheduledDate: '01-May-2024 01:15 PM', alert: 'Y' },
    { id: 985, ruleName: 'testreve1', active: 'Y', type: 'Match', subType: '1DS - File Monitor', domain: '', impacted: 13773, favourite: 'N', scheduled: 'N', lastScheduledDate: '01-May-2024 01:15 PM', alert: 'N' }
  ];
  
  colDefs: ColDef[] = [
    { field: 'id', headerName: 'ID'},
    { field: 'ruleName', headerName: 'Rule Name' },
    { field: 'active', headerName: 'Active'},
    { field: 'type', headerName: 'Type' },
    { field: 'subType', headerName: 'Sub Type'},
    { field: 'impacted', headerName: 'Impacted'},
    { field: 'scheduled', headerName: 'Scheduled' },
    { field: 'lastScheduledDate', headerName: 'Last Scheduled Date'},
    { field: 'alert', headerName: 'Send Alert', hide: false }
  ];

  saveOrUpdateData() {
    console.log('Saved/Updated Data:', this.rowData);
    alert("updated")
  }

  toggleColumns() {
    this.colDefs = this.colDefs.map(col => col.field === 'alert' ? { ...col, hide: !col.hide } : col);
  }

}
