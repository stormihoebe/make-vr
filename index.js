var yeoman = require('yeoman-environment');
var env = yeoman.createEnv();

module.exports = () =>  {
    env.lookup( 
        () =>   {
            console.log('Welcome to makeVR!')
            console.log(`Let's set up a WebVR project using A-Frame and Typescript.`)

            env.run('make-ts-vr')
        }
    )
}