import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSlidesComponent } from './content-slides.component';

describe('ContentSlidesComponent', () => {
  let component: ContentSlidesComponent;
  let fixture: ComponentFixture<ContentSlidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentSlidesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentSlidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
