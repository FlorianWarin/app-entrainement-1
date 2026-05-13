// import { LogReturn } from "../types/log-return"


// export function logManager(...logs : any[]) : LogReturn {

//     let messageToSend = "";
    
//     logs.forEach((element) => messageToSend += String(element));

//     const log = {} as LogReturn;
//     log.logMessage = messageToSend;

//     console.log(log.logMessage)

//     return log;
// }

type OverrideLogsProps = {
    message : string,
    isTrue: boolean,
}

export default class OverrideLogsManager<T extends OverrideLogsProps> {

    logManager(data : T, ...logs : any[]){

        let logsToSend = "";
        
        logs.forEach((element) => logsToSend += String(element));

        console.log(data.message,data.isTrue,logsToSend)
    }

}