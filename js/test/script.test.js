TestCase("GreeterTest", 
	{ 
	 	testGreet: function() { 
	 		var greeter = new myapp.Greeter(); 
	 		assertEquals("Hello World!", greeter.greet("World")); 
	 	},
	 	test: function() { 
	 		assertTrue(true); 
	 	}
	}
);
