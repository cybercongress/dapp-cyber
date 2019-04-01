import React from 'react';
import { Pane, TextInput, Button } from '@cybercongress/ui';
import { Subscribe } from 'unstated';
import searchContainer from './searchContainer';

export const LinkBarContainer = ({ children, ...props }) => (
    <Pane
      display='flex'
      alignItems='center'
      justifyContent='center'
      position='absolute'
      bottom={ 0 }
      width='100%'
      backgroundColor='#000000'
      paddingY={ 11 }
      zIndex={ 2 }
    >
        {children}
    </Pane>
);

export const LinkNewAnswerBar = () => (
    <Subscribe to={ [searchContainer] }>
        {container => (
            <Pane alignItems='center' justifyContent='center' display='flex' width={ 1000 }>
                <Pane
                  display='flex'
                  justifyContent='center'
                  flexDirection='row'
                  width='100%'
                >
                    <TextInput
                      height={ 42 }
                      width='40%'
                      ref={ container.cidToInput }
                      marginRight={ 15 }
                      fontSize='18px'
                      placeholder='Have your own answer?'
                      textAlign='left'
                      backgroundColor='transparent'
                      outline='0'
                      outlineOffset='0'
                      style={ { caretColor: '#36d6ae', boxShadow: 'none' } }
                    />
                    <Button
                      whiteSpace='nowrap'
                      paddingX={ 50 }
                      height={ 42 }
                      fontSize='18px'
                      borderRadius={ 3 }
                      className='btn'
                      onClick={ container.link }
                    >
                        Cyber it
                    </Button>
                </Pane>
            </Pane>
        )}
    </Subscribe>
);

export const LinkQuestionWithAnswerBar = () => (
    <Subscribe to={ [searchContainer] }>
        {container => (
            <Pane display='flex' flexDirection='row' marginLeft={ 80 } width='65%'>
                <TextInput
                  height={ 42 }
                  width='100%'
                  ref={ container.cidFromInput }
                  marginRight={ 15 }
                  placeholder='Question'
                  fontSize='18px'
                  backgroundColor='transparent'
                  outline='0'
                  outlineOffset='0'
                  style={ { caretColor: '#36d6ae', boxShadow: 'none' } }
                />
                <TextInput
                  height={ 42 }
                  width='100%'
                  ref={ container.cidToInput }
                  marginRight={ 15 }
                  placeholder='Answer'
                  fontSize='18px'
                  backgroundColor='transparent'
                  outline='0'
                  outlineOffset='0'
                  style={ { caretColor: '#36d6ae', boxShadow: 'none' } }
                />
                <Button
                  whiteSpace='nowrap'
                  paddingX={ 50 }
                  height={ 42 }
                  fontSize='18px'
                  className='btn'
                  borderRadius={ 3 }
                  onClick={ () => container.link(
                      container.cidFromInput.current.value,
                      container.cidToInput.current.value,
                  ) }
                >
                    Cyber it
                </Button>
            </Pane>
        )}
    </Subscribe>
);
