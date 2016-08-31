/**
 *
 * Created by pavelnovotny on 31.08.16.
 */
var nconf = require('nconf');
var dummyjson = require('dummy-json');
var fs = require('fs');

nconf.argv()
    .env()
    .defaults({ env : 'production' })
    .file({ file: 'config-'+nconf.get('env')+'.json' });


var template = fs.readFileSync(nconf.get('sample-template'), 'utf8');
var result = dummyjson.parse(template);
console.log(result);