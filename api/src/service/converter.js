
const { exec } = require("child_process");

converter = (filename) => {

    console.log(`My path: ${process.env.PATH_CONVERTER} ${process.env.PATH_FILES} -o ${process.env.PATH_FOLDER}/${filename} --material ELEVATION`)

    exec(`${process.env.PATH_CONVERTER} ${process.env.PATH_FILES}/${filename} -o ${process.env.PATH_FOLDER}/${filename}`, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
}

module.exports = converter;