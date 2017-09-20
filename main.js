"use strict";
chrome.management.getAll(function (result) {
    var pre = document.getElementById('extensions-list');
    var lines = [];
    for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
        var info = result_1[_i];
        lines.push("# " + info.name);
        lines.push("- enabled: " + info.enabled);
        lines.push("- https://chrome.google.com/webstore/detail/" + info.id);
        lines.push("- permissions: " + info.permissions.join(','));
        lines.push("- hostPermissions: " + info.hostPermissions.join(','));
        lines.push("- installType: " + info.installType);
        lines.push("- isApp: " + info.isApp);
    }
    pre.appendChild(document.createTextNode(lines.join('\n')));
});
