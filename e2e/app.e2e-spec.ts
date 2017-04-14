import { ClassAttendance } from './app.po';

describe('angular2-full-stack App', function() {
  let page: ClassAttendance;

  beforeEach(() => {
    page = new ClassAttendance();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
