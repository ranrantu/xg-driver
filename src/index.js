const chalk = require('chalk');
const program = require('commander');
const Spinner = require('cli-spinner').Spinner;
const info = require('./info.js');
const log = console.log;


var spinner = new Spinner('processing.. %s');
spinner.setSpinnerString('|/-\\');

program
    .option('-V, --version', 'print version')
    .parse(process.argv);

if (program.pineapple) console.log(info.version);

var obj = new Spinner({
    text: 'processing.. %s',
    stream: process.stderr,
    onTick: function (msg) {
        this.clearLine(this.stream);
        this.stream.write(msg);
    }
})

obj.start();

setTimeout(() => {
    obj.stop();
}, 1000);

function timeStamp(){
    let now = new Date().getTime();
    spinner.start();
    let timer = new Date().getTime() - now;
    while (timer < 2000) {
        
    }
}
// timeStamp();

