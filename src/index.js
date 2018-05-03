/*
* 📦 out of the box React application development tools, built-in css-modules, babel, postcss, HMR, etc.
* 🐠 create-react-app experience
* 🚨 webpack configuration in JSON format
* 🔥 mock
* ✂️ test based on jest, ui test with enzyme
* */

const chalk = require('chalk');
const program = require('commander');
const Spinner = require('cli-spinner').Spinner;
const info = require('./info.js');
const log = console.log;
const co = require('co');
const prompt = require('co-prompt');


var spinner = new Spinner('');
spinner.setSpinnerString('|/-\\');

program
    .option('-V, --version', 'print version')
    .option('-b, --build', 'build package')
    .option('init', 'init project')
    .parse(process.argv);

var obj = new Spinner({
    text: '📦 Loading... %s',
    stream: process.stderr,
    onTick: function (msg) {
        this.clearLine(this.stream);
        this.stream.write(msg);
    }
})

if (program.build) {
    obj.start();
    setTimeout(() => {
        obj.stop();
    }, 3000);
}

if(program.init){
    co(function *() {
        var name = yield prompt('👶username: ');
        var pass = yield prompt.password('password: ');
        var desc = yield prompt.multiline('description: ');
        var ok = yield prompt.confirm('are you sure? ');
    }).then(function (){
        console.log('finish');
    });
}