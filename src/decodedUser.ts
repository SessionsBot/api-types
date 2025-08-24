/** ### Decoded _`auth.userData`_ object for authenticated user:
 * Accessible within frontend using `auth`(Pinia Store) > `userData`(state)
*/
export interface FullUserData {
    Pinia:    DecodedUserData;
    Firebase: Firebase;
}

/** Firebase data for authenticated user.
 * - Contains firebase related authentication data, such as:
 *     - `uid`: Firebase user's uid
 *     - `claims`: Firebase custom claims
 *     - `authTime`: Date string of authentication time
 */
export interface Firebase {
    uid:                string;
    claims:             Claims;
    token:              string;
    authTime:           string;
    issuedAtTime:       string;
    expirationTime:     string;
    signInProvider:     string;
    signInSecondFactor: null;
}

/** Firebase "custom claims" data for authenticated user. */
export interface Claims {
    allGuilds:        string[];
    manageableGuilds: string[];
    iss:              string;
    aud:              string;
    auth_time:        number;
    user_id:          string;
    sub:              string;
    iat:              number;
    exp:              number;
    firebase:         FirebaseClass;
}

/** Internal "Firebase" data object for authenticated users claims.
 * 
 * @see {@link Claims}
*/
export interface FirebaseClass {
    identities?:       object;
    sign_in_provider: string;
}

/** #### Internal "Pinia"/Decoded JWT data object for authenticated users claims.
 * 
 * _Contains __most relevant__ user data in most cases, such as:_
 *     - `id`: User's id, from Discord
 *     - `username`: Display name, from Discord
 *     - `guilds`: All & manageable user's guilds from Discord
*/
export interface DecodedUserData {
    id:          string;
    username:    string;
    displayName: string;
    accentColor: number;
    avatar:      string;
    banner:      null;
    guilds:      Guilds;
    iat:         number;
    exp:         number;
}

/** Object containing the Discord Guilds the user is a member within.
 *     - `all`: All user's guilds from Discord
 *     - `manageable`: Manageable user's guilds from Discord
*/
export interface Guilds {
    all:        string[];
    manageable: string[];
}
