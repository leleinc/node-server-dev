//守护进程
var cp = require('child_process');

var worker;

function spawn(server, config) {
    console.log('1-2');
    worker = cp.spawn('node', [ server,config ]);
    console.log('1-3');
    worker.on('exit', function (code) {
        if (code !== 0) {
            spawn(server, config);
        }
    });
}

function main(argv) {
    console.log('1-1');
    spawn('combineserver.js', argv[0]);
    process.on('SIGTERM', function () {
        worker.kill();
        process.exit(0);
    });
}

main(process.argv.slice(2));