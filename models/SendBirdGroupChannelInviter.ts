/**
 * Sendbird Platform SDK
 * Sendbird Platform API SDK  https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api
 *
 * OpenAPI spec version: 1.0.0
 * Contact: support@sendbird.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SendBirdUser } from './SendBirdUser';
import { HttpFile } from '../http/http';

export class SendBirdGroupChannelInviter {
    'requireAuthForProfileImage'?: boolean;
    'isOnline'?: boolean;
    'userId'?: string;
    'accessToken'?: string;
    'hasEverLoggedIn'?: boolean;
    'isActive'?: boolean;
    'lastSeenAt'?: number;
    'nickname'?: string;
    'discoveryKeys'?: Array<string>;
    'sessionTokens'?: Array<any>;
    'preferredLanguages'?: Array<string>;
    'profileUrl'?: string;
    'createdAt'?: number;
    'phoneNumber'?: string;
    'local'?: string;
    'locale'?: string;
    'isHideMeFromFriends'?: boolean;
    'isShadowBlocked'?: boolean;
    'isCreated'?: boolean;
    'metadata'?: any;
    'description'?: string;
    'endAt'?: number;
    'startAt'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "requireAuthForProfileImage",
            "baseName": "require_auth_for_profile_image",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isOnline",
            "baseName": "is_online",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "userId",
            "baseName": "user_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "accessToken",
            "baseName": "access_token",
            "type": "string",
            "format": ""
        },
        {
            "name": "hasEverLoggedIn",
            "baseName": "has_ever_logged_in",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isActive",
            "baseName": "is_active",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "lastSeenAt",
            "baseName": "last_seen_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "nickname",
            "baseName": "nickname",
            "type": "string",
            "format": ""
        },
        {
            "name": "discoveryKeys",
            "baseName": "discovery_keys",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "sessionTokens",
            "baseName": "session_tokens",
            "type": "Array<any>",
            "format": ""
        },
        {
            "name": "preferredLanguages",
            "baseName": "preferred_languages",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "profileUrl",
            "baseName": "profile_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "phoneNumber",
            "baseName": "phone_number",
            "type": "string",
            "format": ""
        },
        {
            "name": "local",
            "baseName": "local",
            "type": "string",
            "format": ""
        },
        {
            "name": "locale",
            "baseName": "locale",
            "type": "string",
            "format": ""
        },
        {
            "name": "isHideMeFromFriends",
            "baseName": "is_hide_me_from_friends",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isShadowBlocked",
            "baseName": "is_shadow_blocked",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isCreated",
            "baseName": "is_created",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "any",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "endAt",
            "baseName": "end_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "startAt",
            "baseName": "start_at",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SendBirdGroupChannelInviter.attributeTypeMap;
    }

    public constructor() {
    }
}
