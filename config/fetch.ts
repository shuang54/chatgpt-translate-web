
export const fetchData =  async (content:string) =>{
  const OPENAI_API_KEY =
    localStorage.getItem('openai-api-key') || ''
  const BASE_URL =
    localStorage.getItem('proxy-url') || 'https://api.openai.com/v1'
  const inputLanguage = localStorage.getItem('input-language') || 'any'
  const outputLanguage = localStorage.getItem('output-language') || 'Chinese'
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${OPENAI_API_KEY}`
  }

  const data = JSON.stringify({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content:
          `Next, I will let you act as a translator. Your goal is to translate ${inputLanguage}  language into ${outputLanguage} . Please do not use a translation tone when translating, but rather translate naturally, fluently, and authentically, using beautiful and elegant expressions. Please translate the following sentence`
      },
      {
        role: 'user',
        content: content
      }
    ]
  })
  console.log(BASE_URL,OPENAI_API_KEY)
  return await fetch(`${BASE_URL}/chat/completions`, {
    method: 'POST',
    headers: headers,
    body: data
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      return data
    })
    .catch((error) => {
      console.error(error)
    })
}
