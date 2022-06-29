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

import { HttpFile } from '../http/http';

export class V3ApplicationsSettingsGlobalCustomTypeImageModerationLimits {
    'adult'?: number;
    'spoof'?: number;
    'medical'?: number;
    'violence'?: number;
    'racy'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "adult",
            "baseName": "adult",
            "type": "number",
            "format": ""
        },
        {
            "name": "spoof",
            "baseName": "spoof",
            "type": "number",
            "format": ""
        },
        {
            "name": "medical",
            "baseName": "medical",
            "type": "number",
            "format": ""
        },
        {
            "name": "violence",
            "baseName": "violence",
            "type": "number",
            "format": ""
        },
        {
            "name": "racy",
            "baseName": "racy",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V3ApplicationsSettingsGlobalCustomTypeImageModerationLimits.attributeTypeMap;
    }

    public constructor() {
    }
}

