$(function () {
    const Shell = require('node-powershell');
    const ps = new Shell({
        executionPolicy: 'Bypass',
        noProfile: true
    })
    $(document).on('click', 'a[href^="http"]', function (event) {
        event.preventDefault();
        ps.addCommand(`start ${this.href}`);
        ps.invoke().then(output => {
            console.log(output);
        }).catch(err => {
            console.log(err);
        });
    });
});