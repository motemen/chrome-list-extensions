chrome.management.getAll((result: chrome.management.ExtensionInfo[]) => {
  let pre = document.getElementById('extensions-list')!;
  let lines = [];
  for (let info of result) {
    lines.push(`# ${info.name}`);
    lines.push(`- enabled: ${info.enabled}`);
    lines.push(`- https://chrome.google.com/webstore/detail/${info.id}`);
    lines.push(`- permissions: ${info.permissions.join(',')}`);
    lines.push(`- hostPermissions: ${info.hostPermissions.join(',')}`);
    lines.push(`- installType: ${info.installType}`);
    lines.push(`- isApp: ${info.isApp}`);
  }
  pre.appendChild(document.createTextNode(lines.join('\n')));
});
