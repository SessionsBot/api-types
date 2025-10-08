/** Full Firebase document data saved internally for guild, if any. */
export interface FirebaseGuildDoc {
    /** Accent color used within guild. */
    accentColor:                         string;
    /** All session configurations currently scheduled for guild. */
    sessionSchedules:                    SessionSchedule[];
    /** Current signup/panel post configuration for guild. */
    sessionSignup:                       SessionSignup;
    /** Indication whether guild has successfully completed setup process. */
    setupCompleted:                      boolean;
    /** Current timezone configuration for guild. */
    timeZone:                            string;
    /** Key/Value pairs of upcoming sessions ids and their according data. */
    upcomingSessions:                    { [key: string]: UpcomingSession };
}

/** Session Signup related data saved for Guild.
 * 
 * Includes:
 * - `panelChannelId` : Signup channel by ID
 * - `dailySignupPostTime` : Daily signup post time
 * - `mentionRoleIds` : Roles mention on new panels
 */
export interface SessionSignup {
    /** Guild text channel id used for posting new signup panels/thread. */
    panelChannelId:      string;
    /** Dual Purpose:
     * @deprecated - CURRENTLY NOT STORED FOR GUILDS!
     * - Most recent signup thread id and 
     * - Most recent signup msg id sent to guild's signup channel
    */
    signupThreadId:      string;
    /** Daily time chosen for signup panels to be posted. */
    dailySignupPostTime: DailySignupPostTime;
    /** Array of guild role ids to mention on new signup panel post. */
    mentionRoleIds:      string[];
}

/** A Session Schedule currently used within a guild. 
 * 
 * Includes:
 * - `sessionTitle` : Title of session
 * - `sessionDateDaily` : Date of session
 * - `daysOfWeek` : Days of week schedule runs
 * - `sessionUrl` : Location of session
 * - `roles` : Roles of session
 */
export interface SessionSchedule {
    /** Days of week schedule runs*/ 
    daysOfWeek: DaysOfWeek[];
    /** Roles of session. */
    roles:            SessionRole[];
    /** Unique id to identify a particular schedule. */
    scheduleId:            string;
    /** Daily time of session. */
    sessionDateDaily: DailySignupPostTime;
    /** Title of session. */
    sessionTitle:     string;
    /** Location of session. */
    sessionUrl:       string;
}

/** A Session Schedule currently used within a guild. 
 * 
 * Includes:
 * - `title` : Title of session
 * - `date` : Date of session
 * - `location` : Location of session
 * - `roles` : Roles of session
 * - `signupPanelMsgId` : Msg ID of *Signup Panel* for session
 */
export interface UpcomingSession {
    /** Date of session. */
    date:             UpcomingSessionDate;
    /** Location of session. */
    location:         string;
    /** Roles of session. */
    roles:            SessionRole[];
    /** Message Id of *Signup Panel* for session. */
    signupPanelMsgId: string;
    /** Title of session. */
    title:            string;
    
    
}

/** Upcoming Session Date Information
 * 
 * Includes:
 * - `hours` : Hour time of session
 * - `minutes` : Minute time of session
 * - `discordTimestamp` : Discord timestamp of session
 */
export interface UpcomingSessionDate {
    /** Hour time of session. */
    hours:            number;
    /** Minute time of session. */
    minutes:          number;
    /** Discord timestamp of session. */
    discordTimestamp: string;
}

/** Information for a specific session role
 * 
 * Includes:
 * - `roleCapacity` : Capacity of session role.
 * - `roleDescription` : 
 * - `roleEmoji` : Emoji for session role.
 * - `roleName` : Name of session role.
 * - `users` : Users by id currently assigned to role
 */
export interface SessionRole {
    /** Capacity of session role. */
    roleCapacity:    number;
    /** Description of session role. */
    roleDescription: string;
    /** Emoji for session role. */
    roleEmoji:       string;    
    /** Name of session role.
     * `WARNING`: Must be unique!
     */
    roleName:        string;
    /** Users by id currently assigned to role */
    users:    string[];
}

/** `DailySignupPostTime` Date Information:
 * 
 * Includes:
 * - `hours` : Hour of day
 * - `minutes` : Minute of hour
 */
export interface DailySignupPostTime {
    /** Hour of day */
    hours:   number;
    /** Minute of hour */
    minutes: number;
}

/** Potential `daysOfWeek` strings to select for schedule re-occurrence. */
type DaysOfWeek = "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" 