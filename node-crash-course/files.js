const fs = require('fs');


// read file
// fs.readFile('./docs/blog1.txt', (err,data)=>{
//     if (err){
//         console.log(err);
//     }
//     console.log(data.toString());
    
// });

// console.log('last line');


// write file

// fs.writeFile('./docs/blog1.txt', 'hello, world',()=>{
//     console.log('file was written');
    
// });


// directories
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err)=>{
        if(err){
            console.log(err);
        }
        console.log('folder created');
    });
} else {
    fs.rmdir('./assets',(err) =>{
        if(err){
            console.log(err);
        }
        console.log('folder deleted');
    })
}


// delete file

if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err)=>{
        if(err){
            console.log(err);
        }
        console.log('file deleted');        
    })
};

