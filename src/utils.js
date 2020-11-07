const fs = require('fs')
const dirPath = 'C:/Users/user/setconf'


// check's weather main directory exist or not
const checkMainDir = () => fs.existsSync(dirPath) ? true : false

// create main directory 
const createMainDir = () => {
    try {

        fs.mkdirSync(dirPath)

    } catch(_) {
        console.log("can't create directory permission denied.")
        return 
    }
}

// check's if file exist or not.
const checkFileExist = (fileName) => {
    try {

        let mainDirExist = checkMainDir()
        if (!mainDirExist) createMainDir()
    
        let files = fs.readdirSync(dirPath)
    
        let file = files.filter(file => fileName === file)

        return file !== undefined && file.length === 0 ? false : true

    } catch(_) {
        console.log("can't read this directory")
        return false
    }
}

// show's all the saved config files
const showALlConfigFiles = () => {

    let dirExist = checkMainDir()
    if (!dirExist) createMainDir()

    try {

        let files =  fs.readdirSync(dirPath)

        if (files == undefined || files.length === 0) {
            console.log("no config files")
            return 
        }

        files.forEach(file => console.log(file))

        return 

    } catch(_) {
        console.log("can't find any config files.")
        return 
    }
}

// save's new config file 
const saveFile = (fileName) => {

    let dirExist = checkMainDir()
    if (!dirExist) createMainDir()

    let fileExist = checkFileExist(fileName)

    if (fileExist) {
        console.log(`file already exist with this name ${fileName}`)
        return 
    }
    
    try {
        
        let fileContent = fs.readFileSync(fileName, 'utf-8')

        let filePath = dirPath + "/" + fileName

        fs.writeFileSync(filePath, fileContent)

        console.log("config file saved successfully.")

        return 

    } catch(_) {
        console.log("can't save config file.")
        return 
    }
}   

// use the config file 
const setupConfigFile = (fileName) => {

    let dirExist = checkMainDir()
    if (!dirExist) createMainDir()

    let exist = checkFileExist(fileName)

    if (!exist) {
        console.log(`can't find ${fileName} for update.`)
        return 
    }

    try {

        let configFilePath = dirPath + "/" + fileName

        let configFile = fs.readFileSync(configFilePath, 'utf8')

        fs.writeFileSync('package.json', configFile, 'utf8')

        console.log("completed config setup successfully.")

        return 

    } catch(_) {
        console.log("can't write to this directory")
        return 
    }
}  

// remove existing config 
const removeConfigFile = (fileName) => {

    let dirExist = checkMainDir()
    if (!dirExist) createMainDir()

    let exist = checkFileExist(fileName)

    if (!exist) {
        console.log(`can't find ${fileName} to delete.`)
        return 
    }
    
    try {

        let filePath = dirPath + "/" + fileName

        fs.unlinkSync(filePath)

        console.log("removed file successfully.")

        return 

    } catch(_) {
        console.log(`can't remove ${fileName}`)
        return 
    }
}

// update existing config 
const updateConfigFile = (fileName) => {

    let dirExist = checkMainDir()
    if (!dirExist) createMainDir()

    let exist = checkFileExist(fileName)

    if (!exist) {
        console.log(`can't find ${fileName} for update.`)
        return 
    }

    try {

        let filePath = dirPath + "/" + fileName

        let fileContent = fs.readFileSync(fileName, 'utf-8')

        fs.writeFileSync(filePath, fileContent)

        console.log("config file updated successfully.")
    
        return 

    } catch(_) {
        console.log(`can't remove ${fileName}`)
        return 
    }
} 


module.exports = {
    showALlConfigFiles,
    saveFile,
    removeConfigFile,
    updateConfigFile,
    setupConfigFile,
    createMainDir
}