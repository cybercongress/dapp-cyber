import React from 'react';
import { Pane } from '@cybercongress/gravity';
import Noitem from '../../account/noItem';
import ContentItem from '../contentItem';

function timeSince(timeMS) {
  const seconds = Math.floor(timeMS / 1000);

  if (seconds === 0) {
    return 'now';
  }

  let interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return `${interval} years`;
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return `${interval} months`;
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return `${interval} days`;
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return `${interval} hours`;
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return `${interval} minutes`;
  }
  return `${Math.floor(seconds)} seconds`;
}

function DiscussionTab({ data, nodeIpfs }) {
  if (data && data.cyberlink.length > 0) {
    const d = new Date();
    return (
      <div className="container-contentItem">
        {data.cyberlink.map((item, i) => {
          let timeAgoInMS = 0;
          const time = Date.parse(d) - Date.parse(item.timestamp);
          if (time > 0) {
            timeAgoInMS = time;
          }
          return (
            <Pane position="relative" display="flex" alignItems="center">
              <ContentItem
                key={`${item.object_to}_${i}`}
                nodeIpfs={nodeIpfs}
                cid={item.object_to}
                item={item}
              />
              <Pane
                className="time-discussion"
                position="absolute"
                left="100%"
                fontSize={12}
                whiteSpace="nowrap"
                top="5px"
              >
                {timeSince(timeAgoInMS)} ago
              </Pane>
            </Pane>
          );
        })}
      </div>
    );
  }
  return (
    <div className="container-contentItem">
      <Noitem text="No cyberLinks" />
    </div>
  );
}

export default DiscussionTab;