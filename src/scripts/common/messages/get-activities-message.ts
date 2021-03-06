import { Message } from './message';
import { MessageType } from './message-type';

/**
 * Get a list of recent activities generated by this extension.
 */
export class GetActivitiesMessage extends Message {
    /**
     * Construct a get activities message
     */
    constructor() {
        // Set the message type
        super(MessageType.GetActivities);
    }
}
