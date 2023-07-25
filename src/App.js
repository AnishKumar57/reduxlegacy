import React, { useContext } from 'react';
import  "./App.css";
import { UseContextValue } from './context/theme-context';

 
function App(){
  const {theme, toggle, dark} =UseContextValue();
  console.log(dark);
  return (
    <div className='app'>
      <h1>Theme Toggler</h1>
      <div onClick={toggle} 
      className= 'app-header'
      style={{backgroundColor:theme.backgroundColor,
        color: theme.color
      }}>
        <h1>Context Api Theme Toggler</h1>
        <p>
          In literary theory, a text is any object that can be "read", whether this object is a work of literature, a street sign, an arrangement of buildings on a city block, or styles of clothing. It is a coherent set of signs that transmits some kind of informative message.
          In literary theory, a text is any object that can be "read", whether this object is a work of literature, a street sign, an arrangement of buildings on a city block, or styles of clothing. It is a coherent set of signs that transmits some kind of informative message.
          In literary theory, a text is any object that can be "read", whether this object is a work of literature, a street sign, an arrangement of buildings on a city block, or styles of clothing. It is a coherent set of signs that transmits some kind of informative message.
          In literary theory, a text is any object that can be "read", whether this object is a work of literature, a street sign, an arrangement of buildings on a city block, or styles of clothing. It is a coherent set of signs that transmits some kind of informative message.
          In literary theory, a text is any object that can be "read", whether this object is a work of literature, a street sign, an arrangement of buildings on a city block, or styles of clothing. It is a coherent set of signs that transmits some kind of informative message.
          In literary theory, a text is any object that can be "read", whether this object is a work of literature, a street sign, an arrangement of buildings on a city block, or styles of clothing. It is a coherent set of signs that transmits some kind of informative message.
          In literary theory, a text is any object that can be "read", whether this object is a work of literature, a street sign, an arrangement of buildings on a city block, or styles of clothing. It is a coherent set of signs that transmits some kind of informative message.

        </p>
        <div className='button-container'>
          {`Toggle to ${dark? 'Dark':'Light'} theme`};
        </div>
      </div>
    </div>
  );
}

export default App;