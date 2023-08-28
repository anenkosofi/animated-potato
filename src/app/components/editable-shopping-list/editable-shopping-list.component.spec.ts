import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableShoppingListComponent } from './editable-shopping-list.component';

describe('EditableShoppingListComponent', () => {
  let component: EditableShoppingListComponent;
  let fixture: ComponentFixture<EditableShoppingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditableShoppingListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditableShoppingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
