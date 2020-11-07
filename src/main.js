#!/usr/bin/env node

const { Command } = require("commander")
const { 
        showAllConfigFiles, 
        saveFile,
        removeConfigFile,
        updateConfigFile,
        setupConfigFile
    } = require('./utils')

const package = require("../package.json") 
const program = new Command()


program
    .version(package.version)
    .description(package.description)

// show all 
program
    .command("show-all")
    .description("shows all saved config files")
    .action(() => showAllConfigFiles())    


// save config file
program
    .command("add")
    .alias('a')
    .description("save config file")
    .action(({ args }) => {

        if (args === undefined || args.length === 0) {
            console.log("filename parameter required.")
            return
        }

        if (args.length > 1) {
            console.log(`1 parameter required but ${args.length} given`)
            return 
        }
        else saveFile(args[0])
    })


// use saved config
program
    .command("setup")
    .description("use config")
    .action(({ args }) => {

        if (args === undefined || args.length === 0) {
            console.log("filename parameter required.")
            return
        }

        if (args.length > 1) {
            console.log(`1 parameter required but ${args.length} given`)
            return 
        }
        
        setupConfigFile(args[0])
    })


// remove config 
program
    .command("remove")
    .alias("r")
    .description("remove config file")
    .action(({ args }) => {
        
        if (args === undefined || args.length === 0) {
            console.log("filename parameter required.")
            return
        }
        
        if (args.length > 1) {
            console.log(`1 parameter required but ${args.length} given`)
            return 
        } 
        
        removeConfigFile(args[0])
    })

    
// update existing config file 
program
    .command("update")
    .alias("u")
    .description("update config file")
    .action(({ args }) => {

        if (args === undefined || args.length === 0) {
            console.log("filename parameter required.")
            return
        }

        if (args.length > 1) {
            console.log(`1 parameter required but ${args.length} given`)
            return 

        }
        
        updateConfigFile(args[0])
    })

program.parse(process.argv)