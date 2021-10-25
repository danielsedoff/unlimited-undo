# unlimited-undo

This JavaScript code provides unlimited Undo for editable DOM elements.

If you attach this code to an editable element such as `textarea`, `input`, etc, it will allow as many undo operations as technically possible.


USAGE:
```html
<textarea id="textarea1">
</textarea>
...
<input type="button" value="undo" onclick="unlimitedUndo.uu('textarea1');">
</input>
```

You can change the element ID (`textarea1`) or element type (`textarea`) freely since the script looks for the `unlimitedUndo.uu()` function call at window startup.

You can have more than one unlimited-undo field in the same window.
