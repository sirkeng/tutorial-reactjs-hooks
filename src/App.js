import React, { useState, useEffect } from 'react';
// import { ThemeContext, LocaleContext } from './context';
import './App.css';

export default function App() {
  const name = useFormInput('Mary');
  const surname = useFormInput('Popies')
  // const them = useContext(ThemeContext);
  // const locale = useContext(LocaleContext);
  const width = useWindowWidth();
  useDocumentTitle(`${name.value} ${surname.value}`);


  // return (
  //   <section className="them"> 
  //     <input
  //       value={name}
  //       onChange={handleNameChange}
  //     />
  //      <input
  //       value={surname}
  //       onChange={handleSurnameChange}
  //     />     
  //   </section>
  // );


  return (
    <section> 
      <input {...name} />
      <input {...surname} />
      <hr />
      <h5>Width:</h5>
      <h2>
        {width}
      </h2>
    </section>
  );
}

function useFormInput(initialValue) {
  const[value, setValue] = useState(initialValue);


  function handleChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange
  }
}

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  });
}

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize)
    };
  });

  return width;
}


