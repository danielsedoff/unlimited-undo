/* Source: github.com/danielsedoff/unlimited-undo
 * License: MIT
 *
 * The Unlimited Undo Text Editor script allows just that:
 * unlimited undos. Change 1000 ms to another value if you like.
 * See the dedicated github page for more information.
 * */

var unlimitedUndo = {};
unlimitedUndo.updateMs = 1000;

unlimitedUndo.initializeEvents = function (ms) {
  uuFunctionName = "unlimitedUndo.uu(";
  var allElements = document.getElementsByTagName("*");
  for (var i = 0; i < allElements.length; i++) {
    if (typeof allElements[i].onclick != "function") continue;
    thisOnclickText = allElements[i].onclick.toString().replace(/\s/g, "");
    startOfIdentifier = thisOnclickText.indexOf(uuFunctionName);
    if (-1 == startOfIdentifier) continue;
    startOfIdentifier += uuFunctionName.length;
    endOfIdentifier = thisOnclickText.indexOf(")", startOfIdentifier + 1);
    if (-1 == endOfIdentifier) continue;
    watchedElementId = thisOnclickText.substring(
      startOfIdentifier + 1,
      endOfIdentifier - 1
    );
    setInterval(unlimitedUndo.rememberNewState, ms, watchedElementId);
  }
  return;
};

unlimitedUndo.uu = function (id) {
  editedElement = document.getElementById(id);
  if (undefined == editedElement) throw new Error("id '" + id + "' not found.");
  uuss = window.unlimitedUndoStateStore[id];
  if (uuss.length < 1) return;
  unchangedValue = editedElement.value;
  while (unchangedValue == editedElement.value) {
    editedElement.value = uuss.pop();
  }
  return;
};

unlimitedUndo.rememberNewState = function (id) {
  if (undefined == document.getElementById(id)) {
    throw new Error("id '" + id + "' not found.");
  }
  if (undefined == window.unlimitedUndoStateStore) {
    window.unlimitedUndoStateStore = [];
  }
  if (undefined == window.unlimitedUndoStateStore[id]) {
    window.unlimitedUndoStateStore[id] = [];
  }

  uuss = window.unlimitedUndoStateStore[id];
  topEntry = uuss[uuss.length - 1];
  newEntry = document.getElementById(id).value;

  if (newEntry == topEntry) return;
  uuss.push(newEntry);
  return;
};

unlimitedUndo.initializeEvents(unlimitedUndo.updateMs);
