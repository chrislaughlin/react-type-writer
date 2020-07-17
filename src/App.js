import React, {useState} from 'react';

import {
    Button,
    Input,
    Flex
} from "@chakra-ui/core";

import './App.css';
import Letter from "./Letter";


function App() {
    const [inputText, setInputText] = useState('');
    const [displayText, setDisplayText] = useState('');

    return (
        <div className="App">
            <header className="App-header">
                <Flex
                    paddingBottom={50}
                >
                    {
                        displayText.split('').map((char, index) => {
                            return (
                                <Letter
                                    key={index}
                                >
                                    {char}
                                </Letter>
                            )
                        })
                    }
                </Flex>
                <Flex>
                    <Input
                        placeholder="Enter Text Here..."
                        value={inputText}
                        onChange={evt => setInputText(evt.target.value)}
                        size="lg"
                    />
                  <Button
                      variantColor="green"
                      size="lg"
                      onClick={() => {
                          setDisplayText('');
                          const letters = inputText.split('');
                          let i = 0;
                          let interval = setInterval(() => {
                              setDisplayText(curr => `${curr}${letters[i]}`);

                              if (i++ >= letters.length - 1) {
                                  clearInterval(interval);
                              }
                          }, 500);
                      }}
                  >
                    GO!
                  </Button>
                </Flex>
            </header>
        </div>
    );
}

export default App;
