import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { Component } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgGridModule], // ✅ Import AgGridModule for Ag-Grid support
      declarations: [AppComponent] // ✅ Add component in declarations
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // ❌ Removed title test since AppComponent does not have a `title` property

  it('should render grid component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('ag-grid-angular')).toBeTruthy(); // ✅ Checking if grid exists
  });
});
