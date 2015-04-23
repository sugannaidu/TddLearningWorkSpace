describe('when setting up to-do-list -> test|execute|refactor',function(){
	// scope –hold items on the controller
	var scope = {};

	beforeEach(function(){
		module('todo');
		//inject – access angular controllerinject(function($controller){
	    inject(function($controller){
	    //$controller – initialize controller with test scope
		$controller('TodoController',{$scope:scope});
	});  
	});
	// First test
	it('should define a list object',function(){
	expect(scope.list).toBeDefined();
	});

	//Second test
	it('should define a list object', function(){
	expect(scope.list[0]).toEqual('test');
	});
	//Third test
	it('should define a list object', function(){
	expect(scope.list[1]).toEqual('execute');
	});
	//Fourth test
	it('should define a list object', function(){
	expect(scope.list[2]).toEqual('refactor');
	});

	describe('when using a to-do list', function(){
	// var scope = null;
		beforeEach(function(){
			scope.add('repeat');  
		});
		 
		it('should add item to last item in list',function(){
			var lastIndexOfList = scope.list.length - 1;
			expect(scope.list[lastIndexOfList]).toEqual('repeat');
		});
	});
});