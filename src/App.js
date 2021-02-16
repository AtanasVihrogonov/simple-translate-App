import React, { useState } from 'react';
import './App.css';
import Field from './Components/Field';
import Languages from './Components/Languages';
import Translate from './Components/Translate';

export default function App() {
  const [language, setLanguage] = useState('ru');
  const [text, setText] = useState('Greetings!');

  return (
    <div>
      <Field label='Enter English' onChange={setText} value={text} />
      <Languages language={language} onLanguageChange={setLanguage} />
      <Translate text={text} language={language} />
    </div>
  );
}
