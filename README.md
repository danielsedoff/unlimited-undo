# unlimited-undo

This JavaScript code provides unlimited Undo for web page elements.

If you attach this code to an input element such as `textarea`, `input`, etc, it will allow as many undo operations as the client's RAM will allow.


USAGE:
```html
<textarea id="textarea1">
</textarea>
...
<input type="button" value="undo" onclick="unlimitedUndo.uu('textarea1');">
</input>
```

You can change the ID or element type freely since the script looks for the `unlimitedUndo.uu()` function call at window startup.
