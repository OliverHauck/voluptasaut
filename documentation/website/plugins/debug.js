const { inspect } = require('util');

module.exports = function debug(logToConsole) {
    return function(files, metalsmith, done) {
        setImmediate(done);

        if (logToConsole) {
            console.log('\nMETADATA:');
            console.log(metalsmith.metadata());

            // console.log(files);

            for (const f in files) {
                console.log(`\nFILE: ${ f }`);
                console.log(inspect(files[f]));
            }
        }
    };
};
