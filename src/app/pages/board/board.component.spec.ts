import { ComponentFixture, TestBed } from "@angular/core/testing";

import { BoardComponent } from "./board.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatProgressBarModule } from "@angular/material/progress-bar";

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [BoardComponent],
      imports: [HttpClientTestingModule, MatSnackBarModule, MatProgressBarModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
