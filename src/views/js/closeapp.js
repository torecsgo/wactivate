$(function () {
    // const { remote } = require('electron');
    // console.log(remote)
    // $('#quit-btn').on('click', e => {
    //     let window = remote.getCurrentWindow();
    //     window.close();
    // })
    var ipc = require('electron').ipcRenderer;
    $('#quit-btn').on('click', e => {
        ipc.send('window-close');
    })
});