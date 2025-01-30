DOM repositories here generally act as a facade that allows logging, controlled points of
manipulation of the DOM, as well as the ability to inject a humble object representing the actual
document into the code. This way, its really easy to test, and places that depend on manipulating the DOM
depend on the repository interface rather than the DOM directly. This makes it way easier to figure out any part of the application
that may alter the given document state-i.e. circumventing just pure react. 
