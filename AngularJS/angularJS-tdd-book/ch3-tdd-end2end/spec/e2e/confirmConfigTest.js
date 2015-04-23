describe('',function(){
	//ASSEMBLE
	beforeEach(function(){
	//ACT
	browser.get('/');
	});
	it('',function(){
	var todoListItems = element.all(by.repeater('item in list'));
	//ASSERT
	expect(todoListItems.count()).toBe(3);
	});

	// describe('when using a to-do list', function(){
	// // var scope = null;
	// 	beforeEach(function(){
	// 		scope.add('repeat');  
	// 	});
		 
	// 	it('should add item to last item in list',function(){
	// 		var lastIndexOfList = scope.list.length - 1;
	// 		expect(scope.list[lastIndexOfList]).toEqual('repeat');
	// 	});
	// });
});