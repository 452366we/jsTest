module.exports={
    entry:["babel-polyfill","./js/main.js"],
    output:{
        path:__dirname+"/dist",
        filename:"main.js"
    },
    module:{
        rules:[{
            test:/.js$/,
            loader:"babel-loader"
        }]
    }
}