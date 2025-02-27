import React, { useState } from 'react';
import BlurText from './BlurText';   // 引入 BlurText 元件


function App() {

  return (
    <div className="App" style={{
      height: '80vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>

        <div className="blur-text-container" id="root">
          <BlurText
            text="#網站 #UIUX　#前端 #PM
            #獨立 #體貼 　#認真 #效率 #理性兼感性 　　　#換位思考#深思熟慮　　　　　#同理心"
            delay={40}
            animateBy="words"
            direction="top"
            className="open_react_text"
            animationDelay={2000}
          />
        </div>
    </div>
  );
}

export default App;
