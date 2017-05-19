var chokidar = require('chokidar');
var shell = require('shelljs');
var chalk = require('chalk');

chokidar.watch('./src', {
  ignored: /(^|[\/\\])\../,
  persistent: true
}).on('change', path => {
  console.log(chalk.magenta(`${new Date} : '${path}' is rendering.`));

  var code = shell.exec(`RScript main.R ${path}`).code;

  if(code == 0) {
    console.log(chalk.green(`${new Date} : render succeed!`));
  } else {
    console.log(chalk.red(`${new Date} : render failed!`));
  }
});
