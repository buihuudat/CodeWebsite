import React from 'react';
import {Channel, MessageTeam} from 'stream-chat-react';

import {ChannelInner, CreateChannel, EditChannel} from './';

const ChannelContainer = ({isCreating, setIsCreating, isEditing, setIsEditing, createType}) => {
    if(isCreating) {
        return (
            <div className="channel__container">
                <CreateChannel createType={createType} setIsCreating={setIsCreating} />
            </div>
        )
    }

    if(isEditing){
        return (
            <div className="change-container">
                <EditChannel setIsEditing={setIsEditing}/>
            </div>
        )
    }

    const EmptyState = () => (
        <div className="channel-empty__container">
            <Channel
                EmptyStateIndicator={EmptyState}
                Message={(messageProps, i) => <MessageTeam key={1}{...messageProps} />}
                >
                    <ChannelInner setIsEditing={setIsEditing} />
            </Channel>
        </div>
    );
}

export default ChannelContainer;