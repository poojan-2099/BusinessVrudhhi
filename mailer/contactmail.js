const nodemailer =require('../config/nodemailer');


exports.newComment = (contact)=>{
   let htmlString = nodemailer.renderTemplate({contact:contact},'/email.ejs');
    console.log(contact)
  
    nodemailer.transporter.sendMail({
        from:'luciferreal69@gmail.com',
        to:contact.email, // list of receivers
        subject: "Thank you for joining with us!", // Subject line
       
        html: htmlString, // html body
    
    },(err,info)=>{
        if(err){
            console.log('error in sending mail ',err);
            return;
       }
       console.log('mail delivered',info);
       return;  

    })
}


exports.adminUser = (contact)=>{
    //    let htmlString = nodemailer.renderTemplate({comment:comment},'/comments/new_comment.ejs');
        console.log(contact)
        nodemailer.transporter.sendMail({
            from:'luciferreal69@gmail.com',
            to:'patelpoojan2099@gmail.com', // list of receivers
            subject: "You get response", // Subject line
           
            html: `Form reciverd from User =>${contact.name}, number=> ${contact.number}, useremail=>${contact.email}`, // html body
        
        },(err,info)=>{
            if(err){
                console.log('error in sending mail ',err);
                return;
           }
           console.log('mail delivered',info);
           return;  
    
        })
    }