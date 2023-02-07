$(function () {


    $("#10pro").on("click", function () {
        activate10Pro()
    })

    $("#10ltsc").on("click", function () {
        activate10Enterprise()
    })

    $("#10home").on("click", function () {
        activate10Home()
    })

    $("#11pro").on("click", function () {
        activate11Pro()
    })

    $("#11home").on("click", function () {
        activate11Home()
    })

    function activate10Pro() {
        const Shell = require('node-powershell');
        const ps = new Shell({
            executionPolicy: 'Bypass',
            noProfile: true
        })
        ps.addCommand(`slmgr /ipk W269N-WFGWX-YVC9B-4J6C9-T83GX ; slmgr /skms kms8.msguides.com ; slmgr /ato`);
        ps.invoke().then(output => {
            console.log(output);
        }).catch(err => {
            console.log(err);
        });
    }
    function activate10Home() {
        const Shell = require('node-powershell');
        const ps = new Shell({
            executionPolicy: 'Bypass',
            noProfile: true
        })
        ps.addCommand(`slmgr /ipk TX9XD-98N7V-6WMQ6-BX7FG-H8Q99 ; slmgr /skms kms8.msguides.com ; slmgr /ato`);
        ps.invoke().then(output => {
            console.log(output);
        }).catch(err => {
            console.log(err);
        });
    }

    function activate10Enterprise() {
        const Shell = require('node-powershell');
        const ps = new Shell({
            executionPolicy: 'Bypass',
            noProfile: true
        })
        //../../fix.cmd
        ps.addCommand(`cd src/ltsc; dir; cmd.exe /c fix.cmd`);
        ps.invoke().then(output => {
            console.log(output);
        }).catch(err => {
            console.log(err);
        });
    }

    function activate11Pro() {
        const Shell = require('node-powershell');
        const ps = new Shell({
            executionPolicy: 'Bypass',
            noProfile: true
        })
        ps.addCommand(`slmgr /ipk W269N-WFGWX-YVC9B-4J6C9-T83GX ; slmgr /skms kms8.msguides.com ; slmgr /ato`);
        ps.invoke().then(output => {
            console.log(output);
        }).catch(err => {
            console.log(err);
        });
    }
    function activate11Home() {
        const Shell = require('node-powershell');
        const ps = new Shell({
            executionPolicy: 'Bypass',
            noProfile: true
        })
        ps.addCommand(`slmgr /ipk TX9XD-98N7V-6WMQ6-BX7FG-H8Q99 ; slmgr /skms kms8.msguides.com ; slmgr /ato`);
        ps.invoke().then(output => {
            console.log(output);
        }).catch(err => {
            console.log(err);
        });
    }
});