Tinytest.add("jstree - Test $.fn.jstree exists", function(test) {
    test.notEqual($.fn.jstree,"Undefined","Jstree should not be undefined");
});
Tinytest.add("jstree - Test jstree version", function(test) {
    test.equal(jQuery.jstree.version,"3.1.1","Jstree version should be 3.1.1");
});
