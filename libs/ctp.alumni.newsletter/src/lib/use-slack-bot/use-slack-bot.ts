import { WebClient } from '@slack/web-api';
import { CtpAlumniNewsletter } from '../ctp.alumni.newsletter'

export interface UseSlackBot {
  channel: string;
  blocks: any
}

export const useSlackBot = ({channel, blocks}:any) => 
  new Promise( async (resolve, reject) => {
    try{
      const web = new WebClient(process.env.ALUMNI_SLACK_TOKEN)
      await web.chat.postMessage({ channel, blocks })
      resolve(200)
    }catch(e){
      reject(e)
    }
})

// Run it from the command line
if(process.env.NODE_ENV ==='production'){
  const channel = process.env.SLACK_NEWSLETTER_CHANNEL
  console.log("Sending Payload To",channel)
  useSlackBot({
    channel,
    blocks: CtpAlumniNewsletter()
  })
}
