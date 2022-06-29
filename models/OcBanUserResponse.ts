/**
 * Sendbird Platform SDK
 * Sendbird Platform API Javascript SDK  https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { InlineResponse2001 } from './InlineResponse2001';
import { SendBirdUser } from './SendBirdUser';
import { HttpFile } from '../http/http';

export class OcBanUserResponse {
    'startAt'?: number;
    'endAt'?: number;
    'description'?: string;
    'userId'?: string;
    'user'?: SendBirdUser;
    'nextUrl'?: string;
    'requireAuthForProfileImage'?: boolean;
    'nickname'?: string;
    'profileUrl'?: string;
    'metadata'?: InlineResponse2001;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "startAt",
            "baseName": "start_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "endAt",
            "baseName": "end_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "userId",
            "baseName": "user_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "SendBirdUser",
            "format": ""
        },
        {
            "name": "nextUrl",
            "baseName": "next_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "requireAuthForProfileImage",
            "baseName": "require_auth_for_profile_image",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "nickname",
            "baseName": "nickname",
            "type": "string",
            "format": ""
        },
        {
            "name": "profileUrl",
            "baseName": "profile_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "InlineResponse2001",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return OcBanUserResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

