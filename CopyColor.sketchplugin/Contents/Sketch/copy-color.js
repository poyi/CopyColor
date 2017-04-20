function copyFillColor(context) {
  var doc = context.document;
  var selected = context.selection;
  if (selected.count() > 0) {
    var layerFill = selected[0].style().fill().color().immutableModelObject().hexValue().toString();
    var pasteBoard = NSPasteboard.generalPasteboard();
    pasteBoard.clearContents()
    pasteBoard.writeObjects([layerFill]);
    doc.showMessage("Copied layer fill color value: " + layerFill + " to your clipboard");
  } else {
    doc.showMessage("Please select a layer");
  }
};

function copyTextColor(context) {
  var doc = context.document;
  var selected = context.selection;
  if (selected.count() > 0) {
    var textFill = selected[0].textColor().immutableModelObject().hexValue().toString();
    var pasteBoard = NSPasteboard.generalPasteboard();
    pasteBoard.clearContents()
    pasteBoard.writeObjects([textFill]);
    doc.showMessage("Copied text color value: " + textFill + " to your clipboard");
  } else {
    doc.showMessage("Please select a text layer");
  }
};

function copyBorderColor(context) {
  var doc = context.document;
  var selected = context.selection;
  if (selected.count() > 0) {
    var borderColor = selected[0].style().borders().firstObject().color().immutableModelObject().hexValue().toString();
    var pasteBoard = NSPasteboard.generalPasteboard();
    pasteBoard.clearContents()
    pasteBoard.writeObjects([borderColor]);
    doc.showMessage("Copied border color value: " + borderColor + " to your clipboard");
  } else {
    doc.showMessage("Please select a layer");
  }
};
