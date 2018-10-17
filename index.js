var yeoman = require('yeoman-environment');
var env = yeoman.createEnv();

export default start = () => {
    env.lookup( 
        () =>   {
            console.log('Welcome to make vr!')
            console.log(`Let's set up a WebVR project using A-Frame and Typescript`)

            env.run('make-ts-vr')
        }
    )
}