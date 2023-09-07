import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableRecipeFormComponent } from './editable-recipe-form.component';

describe('EditableRecipeFormComponent', () => {
  let component: EditableRecipeFormComponent;
  let fixture: ComponentFixture<EditableRecipeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditableRecipeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditableRecipeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
