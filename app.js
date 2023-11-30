const OpenAI=require("openai")
const fs=require("fs")

// create a client to connect to openAPI/whisper
const openai= new OpenAI({
apiKey:"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"
})

const convertSpeechToText=async()=>{
    const convertedText=await openai.audio.transcriptions.create({
        // Read the audio file that should be converted to text
        file:fs.createReadStream("shreyas.mp3"),
        // Specify the model that shoould be used to convert the apeech to text
        model:"whisper-1"
    })
    console.log(convertedText.text)
}
convertSpeechToText();