import React from 'react';
import {
    Button, SearchItem, Heading, Pane,
} from '@cybercongress/ui';
import { Subscribe } from 'unstated';
import searchContainer from './searchContainer';

const SearchResults = () => (
    <Subscribe to={ [searchContainer] }>
        {(container) => {
            const {
                seeAll, searchQuery, links,
            } = container.state;

            const searchResultsCount = Object.keys(links).length;
            const resultsLimit = (seeAll || searchResultsCount < 10) ? searchResultsCount : 10;
            const cids = Object.keys(links);
            const searchItems = [];

            for (let index = 0; index < resultsLimit; index += 1) {
                const cid = cids[index];
                const disabled = links[cid].status !== 'success';

                const item = disabled ? (
                    <SearchItem
                      key={ cid }
                      rank={ links[cid].rank }
                      disabled
                    >
                        {`${cid} (${links[cid].status})`}
                    </SearchItem>
                ) : (
                    <SearchItem
                      key={ cid }
                      rank={ links[cid].rank }
                      onClick={ e => container.openLink(e, links[cid].content) }
                    >
                        {links[cid].content}
                    </SearchItem>
                );

                searchItems.push(item);
            }

            return (
                <div>
                    <Heading size={ 600 } color='#7c7c7c' marginBottom={ 24 }>
                        {`The answer for ${searchQuery} is`}
                    </Heading>
                    <Pane>
                        {searchItems}
                    </Pane>
                    {searchResultsCount > 10 && (
                        <Pane display='flex' justifyContent='center'>
                            <Button
                              fontSize='1em'
                              marginY={ 15 }
                              className='btn'
                              onClick={ () => container.seeAll() }
                            >
                                {!seeAll ? 'see all' : 'top 10'}
                            </Button>
                        </Pane>
                    )}
                </div>
            );

            // return (
            //     <span>
            //         <FlexContainer>
            //             <Input
            //               defaultValue={ searchQuery }
            //               inputRef={ container.searchInput }
            //               onKeyPress={ container.handleKeyPress }
            //             />
            //             <Button
            //               type='button'
            //               color='blue'
            //               transformtext
            //               style={ { height: '30px', marginLeft: '10px' } }
            //               onClick={ container.handleSearch }
            //             >
            //                 search
            //             </Button>
            //         </FlexContainer>
            //         { searchResultsCount > 0 && searchQuery && (
            //             <div>
            //                 <Title style={ { marginLeft: '0px', marginBottom: '0px' } }>
            //                     Search results:
            //                 </Title>
            //                 { successLinkMessage && (
            //                     <Message type='success'>
            //                         Link successfully added
            //                     </Message>
            //                 )}
            //                 { errorLinkMessage && (
            //                     <Message type='error'>
            //                         Error adding link
            //                     </Message>
            //                 )}
            //                 <LinkContainer column>
            //                     {searchItems}
            //                 </LinkContainer>
            //                 { searchResultsCount > 10 && (
            //                     <Button
            //                       color='blue'
            //                       style={ { marginLeft: '0px' } }
            //                       transformtext
            //                       type='button'
            //                       onClick={ () => container.seeAll() }
            //                     >
            //                         {!seeAll ? 'see all' : 'top 10'}
            //                     </Button>
            //                 )}
            //             </div>
            //         )}
            //     </span>
            // );
        }}
    </Subscribe>
);

export default SearchResults;