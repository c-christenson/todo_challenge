describe('todoApp homepage', function() {
  
  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('To-Do List');
  });

  it('should have an todo form', function() {
    expect(browser.isElementPresent(by.id('todoForm'))).toBe(true);
  });
  

});
