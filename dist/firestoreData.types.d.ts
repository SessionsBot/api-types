/** Full Firebase document data saved internally for guild, if any. */
export interface FirebaseGuildDoc {
    /** Accent color used within guild. */
    accentColor?: string;
    /** Array of guild role ids granted admin permissions. */
    adminRoleIds?: any[];
    /** All session configurations currently scheduled for guild. */
    sessionSchedules?: SessionSchedule[];
    /** Current signup/panel post configuration for guild. */
    sessionSignup?: SessionSignup;
    /** Current timezone configuration for guild. */
    timeZone?: string;
    /** Indication whether guild has successfully completed setup process. */
    setupCompleted?: boolean;
    /** Key/Value pairs of upcoming sessions ids and their according data. */
    upcomingSessions?: {
        [key: string]: UpcomingSession;
    };
}
export interface SessionSignup {
    /** Guild text channel id used for posting new signup panels. */
    panelChannelId?: string;
    /** Daily time chosen for signup panels to be posted. */
    dailySignupPostTime?: SessionSignupDailySignupPostTime;
    /** Array of guild role ids to mention on new signup panel post. */
    mentionRoleIds?: string[];
}
export interface SessionSchedule {
    /** Title of session. */
    sessionTitle?: string;
    /** Date of session. */
    sessionDateDaily?: Date;
    /** Location of session. */
    sessionUrl?: string;
    /** Roles of session. */
    roles?: SessionRole[];
}
export interface UpcomingSession {
    /** Date of session. */
    date?: UpcomingSessionDate;
    /** Roles of session. */
    roles?: SessionRole[];
    /** Title of session. */
    title?: string;
    /** Location of session. */
    location?: string;
    /** Message Id of *Signup Panel* for session. */
    signupPanelMsgId?: string;
}
export interface UpcomingSessionDate {
    /** Hour time of session. */
    hours?: number;
    /** Minute time of session. */
    minutes?: number;
    /** Discord timestamp of session. */
    discordTimestamp?: string;
}
export interface SessionRole {
    /** Name of session role. */
    roleName?: string;
    /** Description of session role. */
    roleDescription?: string;
    /** Emoji for session role. */
    roleEmoji?: string;
    /** Capacity of session role. */
    roleCapacity?: number;
    /** Users currently assigned role */
    users?: string[];
}
export interface SessionSignupDailySignupPostTime {
    hours?: number;
    minutes?: number;
}
