'use client';
import React, { useEffect, useState } from 'react'
import { Select } from './Select'

export const SelectBox = () => {
  const selectList = {
    English: [
      'Auto',
      'English',
      'Chinese',
      'Spanish',
      'Japanese',
      'French',
      'German',
      'Italian',
      'Portuguese',
      'Dutch',
      'Russian',
      'Korean',
      'Arabic',
      'Hindi',
      'Turkish',
      'Swedish',
      'Norwegian',
      'Danish',
      'Finnish',
      'Polish',
      'Indonesian',
      'Greek',
      'Czech',
      'Hungarian',
      'Thai',
      'Vietnamese',
      'Romanian',
      'Hebrew',
      'Bengali',
      'Malay',
      'Ukrainian',
      'Croatian',
      'Slovak',
      'Slovenian',
      'Serbian',
      'Bulgarian',
      'Lithuanian',
      'Latvian',
      'Estonian',
      'Albanian',
      'Macedonian',
      'Urdu',
      'Persian',
      'Swahili',
      'Tagalog',
      'Icelandic',
      'Maltese',
      'Farsi',
      'Sinhala',
      'Telugu',
      'Tamil',
      'Marathi',
      'Burmese',
      'Nepali',
      'Kannada',
      'Gujarati',
      'Sanskrit',
      'Welsh',
      'Yiddish',
      'Luxembourgish',
      'Corsican',
      'Basque',
      'Frisian',
      'Scottish Gaelic',
      'Irish',
      'Hawaiian',
      'Maori',
      'Punjabi',
      'Pashto',
      'Kurdish',
      'Kashmiri',
      'Sindhi',
      'Uzbek',
      'Tajik',
      'Kyrgyz',
      'Kazakh',
      'Tatar',
      'Bashkir',
      'Mongolian',
      'Afrikaans',
      'Zulu',
      'Xhosa',
      'Sotho',
      'Sesotho',
      'Swazi',
      'Tswana',
      'Ndebele',
      'Shona',
      'Tsonga'
    ]
  }
  useEffect(()=>{
    setInputLanguage(localStorage.getItem('input-language')|| 'any')
    setOutputLanguage(localStorage.getItem('output-language') || 'Chinese')
  },[])
  const [inputLanguage,setInputLanguage] = useState('any'
  )
  const [outputLanguage, setOutputLanguage] = useState(
    'Chinese'
  )
  const callbackInput = (selectedValue:string) =>{
    setInputLanguage(selectedValue)
    localStorage.setItem('input-language',selectedValue)
    console.log(localStorage.getItem('input-language'))
  }
  const callback = (selectedValue: string) => {
    setOutputLanguage(selectedValue)
    localStorage.setItem('output-language', selectedValue)
    console.log(localStorage.getItem('output-language'))
  }
  return (
    <div className="w-full flex flex-row items-center">
      <Select value={inputLanguage} callback={callbackInput}  label="input language" selectList={selectList.English} />
      →
      <Select value={outputLanguage} callback={callback} label="output language" selectList={selectList.English} />
    </div>
  )
}
