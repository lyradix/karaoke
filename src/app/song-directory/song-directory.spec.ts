import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongDirectory } from './song-directory';

describe('SongDirectory', () => {
  let component: SongDirectory;
  let fixture: ComponentFixture<SongDirectory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SongDirectory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SongDirectory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
