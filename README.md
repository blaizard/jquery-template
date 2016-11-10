## Template for jQuery Modules

A template for jQuery modules. All you need to do is to replace <code>&lt;template&gt;</code> tags with the module name of your choice.

&#128279; https://www.blaizard.com/projects/jquery-template

## Features

 - Store local options into a data "&lt;template&gt;" object, accessible through:
 ```javascript
 $(this).data("myModule");
 ``` 
 - Allow jquery action chaining:
 ```javascript
 var result = $(this).myModule("create").myModule("add", 1).myModule("get");
 ``` 
 - Auto-loading from tags:
  ```html
 <div data-myModule="{theme: 'blue'}"></div>
 ```
 - Overwritable default options
 ```javascript
 $().myModule.defaults.theme = "blue";
 ``` 
 - Route multi object into single object calls. For example if more than one object is selected, internally the function will be called for each objects (and not one call for the full selection).
 - Doxygen-like documentation friendly.