const jsonfile = require('jsonfile')
const moment = require('moment')
const FILE_PATH = './data.json'
const DATA = moment().format()
const data = {
    data:DATA
}
jsonfile.writeFile(FILE_PATH, data)