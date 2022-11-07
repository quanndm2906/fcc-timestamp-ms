const e = require("express")

const timeStamp = (req, res)=>{
    const {timeString} = req.params
    if (!timeString) {
        let date = new Date(Date.now())
        return res.status(200).json({
            unix: date.getTime(),
            utc: date.toUTCString()
        })
    }
    else{
        let date
        if(/\d{4}(\-\d{2}){2}/.test(timeString)){
            date = new Date(timeString)
        }else{
            date = new Date((timeString/1000)*1000)
        }
        

        if(date =='Invalid Date'){
            return res.status(400).json({ error : "Invalid Date" })
        }

        return res.status(200).json({
            unix: date.getTime(),
            utc: date.toUTCString()
        })
    }
}
module.exports = {
    timeStamp
}