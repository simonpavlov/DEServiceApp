const {remote} = require('electron');
const {Menu, MenuItem} = remote;
polygon = require('./polygon.js').createPolygon();
const template = [
    {
        label: 'Edit',
            submenu: [
            {
                label: 'New',
                click(item, focusedWindow) {
                    console.log('New item');
                }
            },
            {
                label: 'Save',
                click(item, focusedWindow) {
                    console.log('Save item');
                    polygon.writeToFile('log');
                    console.log(initMap);
                }
            }
        ]
    },
    {
        label: 'View',
        submenu: [
        {
            label: 'Reload',
            accelerator: 'CmdOrCtrl+R',
            click(item, focusedWindow) {
                if (focusedWindow) focusedWindow.reload();
            }
        },
        {
            label: 'Toggle Developer Tools',
            accelerator: 'Ctrl+Shift+I',
            click(item, focusedWindow) {
                if (focusedWindow)
                    focusedWindow.webContents.toggleDevTools();
            }
        },
        ]
    },
    {
        role: 'help',
        submenu: [
        {
            label: 'Learn More',
            click() { require('electron').shell.openExternal('https://github.com/simonpavlov/DEServiceApp/blob/master/README.md'); }
        },
        ]
    },
];

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);
